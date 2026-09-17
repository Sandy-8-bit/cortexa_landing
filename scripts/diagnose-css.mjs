import fs from 'node:fs';
import postcss from 'postcss';
import tailwind from '@tailwindcss/postcss';
import { transform } from 'lightningcss';
const input = fs.readFileSync('app/globals.css','utf8');
const result = await postcss([tailwind({ optimize: false })]).process(input, { from: 'app/globals.css' });
fs.writeFileSync('test-results/generated.css', result.css);
try { transform({ filename: 'generated.css', code: Buffer.from(result.css), minify: false }); console.log('CSS parses successfully'); }
catch(error) { console.log(error); const line = error.loc?.line; if(line) console.log(result.css.split('\n').slice(Math.max(0,line-4),line+3).join('\n')); }
