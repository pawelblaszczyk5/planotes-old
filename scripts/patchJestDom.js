/* eslint-disable @typescript-eslint/no-var-requires */
// TODO: remove after https://github.com/testing-library/jest-dom/issues/427
const fs = require('fs/promises');
const path = require('path');

const typesPath = path.resolve('node_modules', '@types', 'testing-library__jest-dom', 'index.d.ts');
const SEARCHED_REFERENCE = '/// <reference types="jest" />';

(async () => {
  const jestDomTypes = (await fs.readFile(typesPath)).toString();

  const lines = jestDomTypes.split('\n');

  if (lines[8] === SEARCHED_REFERENCE) {
    await fs.writeFile(typesPath, lines.slice(0, 8).concat(lines.slice(9)).join('\n'));
    console.log('Successfully removed jest types reference');
    return;
  }

  console.warn("Jest types reference wasn't found");
})();
