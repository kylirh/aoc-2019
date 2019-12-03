import fs from 'fs';
(async () => {
  const day = process.argv[2];
  if (day === undefined) {
    console.error('Please specify a day and challenge, ie: 1-1.');
    return;
  }

  let data;
  try {
    const dataPath = `src/${day}/data.txt`;
    data = fs.readFileSync(dataPath, 'utf8');
  } catch (e) {
    console.log('No test data found.');
  }

  try {
    const modulePath = `./${day}/index.js`;
    const module = await import(modulePath);
    const result = module.default(data);
    if (result) {
      console.log(`\r\n====================\r\n${result}\r\n====================\r\n`);
    }
  } catch (e) {
    console.error(e);
  }
})();
