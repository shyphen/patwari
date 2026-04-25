const gis = require('g-i-s');
const fs = require('fs');
const https = require('https');
const http = require('http');

const dishes = {
    'dal_makhani': 'dal makhani authentic indian food high resolution',
    'butter_chicken': 'butter chicken authentic indian food high resolution',
    'sarson_da_saag': 'sarson da saag authentic indian food high resolution',
    'kadhi_chawal': 'kadhi chawal authentic indian food',
    'tandoori_chicken': 'tandoori chicken authentic indian food high resolution',
    'seekh_kebab': 'seekh kebab authentic indian food',
    'paneer_tikka': 'paneer tikka authentic indian food',
    'butter_naan': 'butter naan bread authentic indian food',
    'jeera_rice': 'jeera rice authentic indian food',
    'lassi': 'punjabi sweet lassi drink in glass',
    'gulab_jamun': 'gulab jamun authentic indian dessert'
};

if (!fs.existsSync('public/images')) {
    fs.mkdirSync('public/images', { recursive: true });
}

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const client = url.startsWith('https') ? https : http;
        client.get(url, (response) => {
            if (response.statusCode === 200 || response.statusCode === 301 || response.statusCode === 302) {
                if (response.statusCode === 301 || response.statusCode === 302) {
                   return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
                }
                const file = fs.createWriteStream(dest);
                response.pipe(file);
                file.on('finish', () => {
                    file.close(resolve);
                });
            } else {
                reject(new Error(`Failed with status ${response.statusCode}`));
            }
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function fetchImages() {
    for (const [key, query] of Object.entries(dishes)) {
        await new Promise((resolve) => {
            gis(query, async (error, results) => {
                if (error || !results || results.length === 0) {
                    console.log(`Failed to find images for ${key}`);
                    resolve();
                    return;
                }
                
                // Try to download the first working image
                for (let i = 0; i < Math.min(5, results.length); i++) {
                    const imgUrl = results[i].url;
                    try {
                        const filename = `${key}.jpg`;
                        await downloadImage(imgUrl, `public/images/${filename}`);
                        console.log(`Successfully downloaded ${filename}`);
                        break;
                    } catch (e) {
                        console.log(`Failed downloading ${imgUrl} for ${key}, trying next...`);
                    }
                }
                resolve();
            });
        });
    }
}

fetchImages();
