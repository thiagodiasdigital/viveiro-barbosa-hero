export const HERO_CONFIG = {
  totalFrames: 145,
  basePath: "/sequences/hero/hero-",
  extension: ".webp",
  canvasWidth: 1920,
  canvasHeight: 1080,

  /* ── Aspect ratio 16:9 (1.78:1) ──
   * Frames extraídos de final-video-viveiro.mp4 (688×464 nativo)
   * Pipeline: crop 688×387 (16:9) → upscale lanczos → 1920×1080.
   * Ratio 16:9 nativo = zero crop em viewports padrão desktop. */

  /* Frames carregados primeiro para exibição imediata */
  criticalFrames: [0, 36, 72, 108, 144],

  overlays: {
    /* Scroll indicator some cedo para não atrapalhar */
    scrollIndicatorFadeEnd: 0.06,
    /* Texto CTA aparece no final, quando o logo retorna */
    textFadeStart: 0.82,
    textFadeEnd: 0.94,
  },
} as const;

/** Configuração mobile: frames 960×540 (~70% mais leves) */
export const HERO_MOBILE = {
  breakpoint: 768,
  basePath: "/sequences/hero-mobile/hero-",
  canvasWidth: 960,
  canvasHeight: 540,
  batchSize: 4,
} as const;

/** Configuração do modo de renderização adaptativo por faixa de frames.
 *  Calibrado frame-a-frame com o vídeo final-video-viveiro.mp4:
 *    - Frames 0–3:  Logo puro em fundo branco → contain (barras invisíveis)
 *    - Frames 4–8:  Logo dissolve, terra emerge → transição contain→cover
 *    - Frames 9–144: Cenas de terra/mudas/close-up → cover puro
 *  O vídeo NÃO retorna ao logo no final — cover permanece até o último frame.
 */
export const ADAPTIVE_RENDER = {
  /** Último frame em contain puro (logo branco) */
  CONTAIN_END: 3,
  /** Faixa de transição contain → cover [início, fim] */
  TRANSITION_TO_COVER: [4, 8] as const,
  /** Faixa de transição cover → contain — DESATIVADA (logo não retorna) */
  TRANSITION_TO_CONTAIN: [999, 999] as const,
  /** Primeiro frame em contain puro no final — DESATIVADO */
  CONTAIN_START: 999,
} as const;

export function getFramePath(index: number, mobile = false): string {
  const num = String(index + 1).padStart(4, "0");
  const base = mobile ? HERO_MOBILE.basePath : HERO_CONFIG.basePath;
  return `${base}${num}${HERO_CONFIG.extension}`;
}
