const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const INPUT_DIR = path.join(__dirname, "..", "public", "sequences", "hero");
const OUTPUT_DIR = path.join(
  __dirname,
  "..",
  "public",
  "sequences",
  "hero-mobile",
);
const TARGET_WIDTH = 960;
const TARGET_HEIGHT = 540;
const WEBP_QUALITY = 75;

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs
    .readdirSync(INPUT_DIR)
    .filter((f) => f.endsWith(".webp"))
    .sort();

  console.log(
    `Resizing ${files.length} frames to ${TARGET_WIDTH}x${TARGET_HEIGHT} (quality ${WEBP_QUALITY})...`,
  );

  let done = 0;
  for (const file of files) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputPath = path.join(OUTPUT_DIR, file);

    await sharp(inputPath)
      .resize(TARGET_WIDTH, TARGET_HEIGHT, { fit: "fill" })
      .webp({ quality: WEBP_QUALITY })
      .toFile(outputPath);

    done++;
    if (done % 10 === 0 || done === files.length) {
      console.log(`  ${done}/${files.length}`);
    }
  }

  // Report sizes
  const inputSize = files.reduce((sum, f) => {
    return sum + fs.statSync(path.join(INPUT_DIR, f)).size;
  }, 0);
  const outputSize = files.reduce((sum, f) => {
    return sum + fs.statSync(path.join(OUTPUT_DIR, f)).size;
  }, 0);

  console.log(`\nOriginal:  ${(inputSize / 1024 / 1024).toFixed(1)} MB`);
  console.log(`Mobile:    ${(outputSize / 1024 / 1024).toFixed(1)} MB`);
  console.log(
    `Reduction: ${(((inputSize - outputSize) / inputSize) * 100).toFixed(0)}%`,
  );
}

main().catch(console.error);
