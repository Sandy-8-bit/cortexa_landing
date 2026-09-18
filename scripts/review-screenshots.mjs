import sharp from 'sharp';
const name = process.argv[2] || 'home';
const offset = Number(process.argv[3] || 0);
const desktop = await sharp(`.playwright-artifacts/screenshots/${name}-desktop.png`).extract({left:0,top:offset,width:1440,height:1000}).resize(1008,700).jpeg({quality:80}).toBuffer();
const mobile = await sharp(`.playwright-artifacts/screenshots/${name}-mobile.png`).extract({left:0,top:0,width:390,height:1400}).resize(390,1400).jpeg({quality:80}).toBuffer();
const result = await sharp({create:{width:1418,height:1400,channels:3,background:'#c9c9c6'}}).composite([{input:desktop,left:0,top:0},{input:mobile,left:1028,top:0}]).jpeg({quality:78}).toBuffer();
console.log(result.toString('base64'));
