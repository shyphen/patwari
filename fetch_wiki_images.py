import wikipedia
import requests
import os
import time

dishes = {
    'dal_makhani': 'Dal makhani',
    'butter_chicken': 'Butter chicken',
    'sarson_da_saag': 'Sarson da saag',
    'kadhi_chawal': 'Kadhi',
    'tandoori_chicken': 'Tandoori chicken',
    'seekh_kebab': 'Seekh kebab',
    'paneer_tikka': 'Paneer tikka',
    'butter_naan': 'Naan',
    'jeera_rice': 'Jeera rice',
    'lassi': 'Lassi',
    'gulab_jamun': 'Gulab jamun'
}

os.makedirs('public/images', exist_ok=True)
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

for key, query in dishes.items():
    try:
        page = wikipedia.page(query, auto_suggest=False)
        # Find first JPG image that isn't a tiny icon
        img_url = None
        for img in page.images:
            if img.lower().endswith('.jpg') and 'icon' not in img.lower() and 'logo' not in img.lower():
                img_url = img
                break
                
        if img_url:
            response = requests.get(img_url, headers=headers, stream=True)
            if response.status_code == 200:
                with open(f'public/images/{key}.jpg', 'wb') as f:
                    for chunk in response.iter_content(1024):
                        f.write(chunk)
                print(f"Successfully downloaded {key}.jpg")
            else:
                print(f"Failed to download {img_url} for {key} (Status: {response.status_code})")
        else:
            print(f"No suitable image found on Wikipedia for {query}")
            
    except Exception as e:
        print(f"Error fetching {query}: {e}")
        
    time.sleep(1) # Be nice to API
