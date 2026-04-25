const axios = require('axios');
const fs = require('fs');
const path = require('path');

const dishes = {
    'Dal_makhani': 'dal_makhani.jpg',
    'Butter_chicken': 'butter_chicken.jpg',
    'Sarson_da_saag': 'sarson_da_saag.jpg',
    'Kadhi': 'kadhi_chawal.jpg',
    'Tandoori_chicken': 'tandoori_chicken.jpg',
    'Seekh_kebab': 'seekh_kebab.jpg',
    'Paneer_tikka': 'paneer_tikka.jpg',
    'Naan': 'butter_naan.jpg',
    'Jeera_rice': 'jeera_rice.jpg',
    'Lassi': 'lassi.jpg',
    'Gulab_jamun': 'gulab_jamun.jpg'
};

async function fetchImages() {
    try {
        const titles = Object.keys(dishes).join('|');
        const url = `https://en.wikipedia.org/w/api.php?action=query&titles=${titles}&prop=pageimages&format=json&pithumbsize=800`;
        
        const response = await axios.get(url, {
            headers: { 'User-Agent': 'HungriDhabaBot/1.0' }
        });
        
        const pages = response.data.query.pages;
        if (!fs.existsSync('public/images')) {
            fs.mkdirSync('public/images', { recursive: true });
        }
        
        for (const pageId in pages) {
            const page = pages[pageId];
            const title = page.title.replace(/ /g, '_');
            
            if (page.thumbnail && page.thumbnail.source) {
                const imgUrl = page.thumbnail.source;
                const filename = dishes[title] || `${title}.jpg`;
                
                const imgRes = await axios.get(imgUrl, { responseType: 'stream', headers: { 'User-Agent': 'HungriDhabaBot/1.0' } });
                imgRes.data.pipe(fs.createWriteStream(`public/images/${filename}`));
                console.log(`Downloaded ${filename}`);
            } else {
                console.log(`No image found for ${title}`);
            }
        }
    } catch (e) {
        console.error('Error:', e.message);
    }
}

fetchImages();
