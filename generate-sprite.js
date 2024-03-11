import fs from 'fs'
import path from 'path'
import SVGSpriter from 'svg-sprite'

const spriter = new SVGSpriter({
  mode: {
    symbol: {
      dest: path.resolve('public'),
      sprite: 'sprite.svg'
    }
  }
});

function addSvgFilesToSpriter(directory) {
  const files = fs.readdirSync(directory);

  files.forEach(file => {
    const filePath = path.join(directory, file);
    if (path.extname(filePath).toLowerCase() === '.svg') {
      const svgContent = fs.readFileSync(filePath, 'utf-8');
      // eslint-disable-next-line no-undef
      const svgPath = path.relative(process.cwd(), filePath);
      spriter.add(svgPath, null, svgContent);
    }
  });
}

const svgDirectory = path.resolve('src', 'app', 'assets', 'icons');

addSvgFilesToSpriter(svgDirectory);

spriter.compile((_, result) => {
  for (const mode in result) {
    for (const resource in result[mode]) {
      fs.mkdirSync(path.dirname(result[mode][resource].path), { recursive: true });
      fs.writeFileSync(result[mode][resource].path, result[mode][resource].contents);
    }
  }
})
