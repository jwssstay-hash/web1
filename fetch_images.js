const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'Images', 'Explore');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

async function downloadWikiImage(query, filename) {
  return new Promise((resolve) => {
    https.get(`https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${encodeURIComponent(query)}`, (res) => {
      let data = '';
      res.on('data', d => data += d);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pageId === '-1' || !pages[pageId].original) {
            console.log('No image found for', query);
            resolve(false);
            return;
          }
          const imgUrl = pages[pageId].original.source;
          console.log('Downloading', imgUrl, 'for', query);
          
          https.get(imgUrl, (imgRes) => {
            const dest = path.join(dir, filename);
            const file = fs.createWriteStream(dest);
            imgRes.pipe(file);
            file.on('finish', () => {
              file.close();
              resolve(true);
            });
          }).on('error', () => resolve(false));
        } catch (e) { resolve(false); }
      });
    }).on('error', () => resolve(false));
  });
}

(async () => {
  await downloadWikiImage('Vainu Bappu Observatory', 'observatory.jpg');
  await downloadWikiImage('Andiappanur Odai Reservoir', 'dam.jpg'); // more accurate name
  await downloadWikiImage('Beeman Madavu', 'falls.jpg');
  console.log('Done downloading.');
})();
