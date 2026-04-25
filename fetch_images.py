import urllib.request, json, os

dishes = {
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
}

req = urllib.request.Request(
    f"https://en.wikipedia.org/w/api.php?action=query&titles={'|'.join(dishes.keys())}&prop=pageimages&format=json&pithumbsize=800",
    headers={'User-Agent': 'HungriDhabaBot/1.0 (test@example.com)'}
)

try:
    response = urllib.request.urlopen(req)
    data = json.loads(response.read())
    pages = data['query']['pages']
    
    os.makedirs('public/images', exist_ok=True)
    
    for p in pages.values():
        title = p['title'].replace(' ', '_')
        if 'thumbnail' in p:
            img_url = p['thumbnail']['source']
            filename = dishes.get(title, title+'.jpg')
            
            # Download image with user agent
            img_req = urllib.request.Request(img_url, headers={'User-Agent': 'HungriDhabaBot/1.0 (test@example.com)'})
            with urllib.request.urlopen(img_req) as response, open(f'public/images/{filename}', 'wb') as out_file:
                data = response.read()
                out_file.write(data)
                
            print(f'Downloaded {filename}')
        else:
            print(f'No image found for {title}')
            
except Exception as e:
    print('Error:', e)
