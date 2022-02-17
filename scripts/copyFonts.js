/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs/promises');
const path = require('path');

const fontSizes = [300, 400, 500, 600, 700, 800];

(async () => {
  const data = (
    await Promise.all(
      fontSizes.map((size) => fs.readFile(path.join('node_modules/@fontsource/manrope', `${size}.css`))),
    )
  )
    .reduce((prev, curr) => prev + curr.toString(), '')
    .replaceAll('./files', '/fonts');

  await fs.writeFile(path.join('app', 'fonts.css'), data);
})();
