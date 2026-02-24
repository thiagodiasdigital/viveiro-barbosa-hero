"use client";

import { useEffect, useRef, useCallback } from "react";
import { ADAPTIVE_RENDER } from "./hero.constants";

/**
 * Calcula o fator de escala adaptativo para o frame atual.
 *
 * - Frames de logo (0–20, 125–144): contain (Math.min) → garante 100% de visibilidade
 * - Frames de cena (29–117): cover (Math.max) → garante 100% de preenchimento
 * - Frames de transição (21–28, 118–124): interpolação linear entre contain e cover
 *
 * @param frameIndex - Índice do frame atual (0–144)
 * @param canvasW - Largura do canvas em pixels (inclui DPR)
 * @param canvasH - Altura do canvas em pixels (inclui DPR)
 * @param imgW - Largura nativa do frame (1920)
 * @param imgH - Altura nativa do frame (1080)
 * @returns scale factor (number)
 */
function getAdaptiveScale(
  frameIndex: number,
  canvasW: number,
  canvasH: number,
  imgW: number,
  imgH: number,
): number {
  const containScale = Math.min(canvasW / imgW, canvasH / imgH);
  const coverScale = Math.max(canvasW / imgW, canvasH / imgH);

  const {
    CONTAIN_END,
    TRANSITION_TO_COVER,
    TRANSITION_TO_CONTAIN,
    CONTAIN_START,
  } = ADAPTIVE_RENDER;

  /* Faixas de contain puro (logo) */
  if (frameIndex <= CONTAIN_END || frameIndex >= CONTAIN_START) {
    return containScale;
  }

  /* Transição contain → cover */
  if (frameIndex >= TRANSITION_TO_COVER[0] && frameIndex <= TRANSITION_TO_COVER[1]) {
    const t = (frameIndex - TRANSITION_TO_COVER[0]) /
              (TRANSITION_TO_COVER[1] - TRANSITION_TO_COVER[0]);
    return containScale + (coverScale - containScale) * t;
  }

  /* Transição cover → contain */
  if (frameIndex >= TRANSITION_TO_CONTAIN[0] && frameIndex <= TRANSITION_TO_CONTAIN[1]) {
    const t = (frameIndex - TRANSITION_TO_CONTAIN[0]) /
              (TRANSITION_TO_CONTAIN[1] - TRANSITION_TO_CONTAIN[0]);
    return coverScale + (containScale - coverScale) * t;
  }

  /* Cover puro (cenas) */
  return coverScale;
}

interface HeroCanvasProps {
  frames: (ImageBitmap | null)[];
  progress: number;
  totalFrames: number;
  ready: boolean;
}

export function HeroCanvas({
  frames,
  progress,
  totalFrames,
  ready,
}: HeroCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const lastDrawKey = useRef("");

  const setupCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;

    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;

    lastDrawKey.current = "";
  }, []);

  useEffect(() => {
    setupCanvas();
    window.addEventListener("resize", setupCanvas);
    return () => window.removeEventListener("resize", setupCanvas);
  }, [setupCanvas]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !ready) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const frameIndex = Math.min(
      Math.floor(progress * (totalFrames - 1)),
      totalFrames - 1
    );

    const drawKey = `${frameIndex}`;
    if (drawKey === lastDrawKey.current) return;

    const img = frames[frameIndex];
    if (!img) return;

    lastDrawKey.current = drawKey;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const bg = "#F7F7F2";
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    /* Modo adaptativo: contain nos frames de logo, cover nos frames de cena,
       transição suave entre os dois para eliminar saltos visuais. */
    const scale = getAdaptiveScale(
      frameIndex,
      canvas.width,
      canvas.height,
      img.width,
      img.height,
    );

    const drawW = Math.ceil(img.width * scale);
    const drawH = Math.ceil(img.height * scale);
    const x = Math.floor((canvas.width - drawW) / 2);
    const y = Math.floor((canvas.height - drawH) / 2);

    ctx.drawImage(img, x, y, drawW, drawH);

    /* Edge fade: gradientes laterais que dissolvem a borda entre
       a imagem e o fundo #F7F7F2 nos frames de transição (contain→cover).
       Quando barWidth = 0 (cover puro), o bloco não executa. */
    const barWidth = Math.max(0, (canvas.width - drawW) / 2);

    if (barWidth > 1) {
      const bleed = Math.min(barWidth * 0.6, 60);

      /* Gradiente esquerdo: fundo opaco → transparente */
      const gradL = ctx.createLinearGradient(0, 0, barWidth + bleed, 0);
      gradL.addColorStop(0, "#F7F7F2");
      gradL.addColorStop(1, "rgba(247, 247, 242, 0)");
      ctx.fillStyle = gradL;
      ctx.fillRect(0, 0, barWidth + bleed, canvas.height);

      /* Gradiente direito: espelhado */
      const gradR = ctx.createLinearGradient(
        canvas.width, 0,
        canvas.width - barWidth - bleed, 0,
      );
      gradR.addColorStop(0, "#F7F7F2");
      gradR.addColorStop(1, "rgba(247, 247, 242, 0)");
      ctx.fillStyle = gradR;
      ctx.fillRect(canvas.width - barWidth - bleed, 0, barWidth + bleed, canvas.height);
    }
  }, [frames, progress, totalFrames, ready]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="Animação Viveiro Barbosa — da semente à lavoura"
      className="absolute inset-0 h-full w-full"
    />
  );
}
