/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs/promises');
const path = require('path');

const fontSizes = [300, 400, 500, 600, 700, 800];
const regex = /fonts\/((\w|-|\.)+)/gm;

(async () => {
  const data = (
    await Promise.all(
      fontSizes.map((size) => fs.readFile(path.join('node_modules/@fontsource/manrope', `${size}.css`))),
    )
  )
    .reduce((prev, curr) => prev + curr.toString(), '')
    .replaceAll('./files', '/fonts');

  const fontMatches = [...data.matchAll(regex)];

  await Promise.all(
    fontMatches.map(([, fontFile]) =>
      fs.copyFile(path.join('node_modules/@fontsource/manrope/files', fontFile), path.join('public/fonts', fontFile)),
    ),
  );

  await fs.writeFile(path.join('app', 'fonts.css'), data);
})();
