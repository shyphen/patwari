from duckduckgo_search import DDGS
import urllib.request
import os

dishes = {
    'Dal_makhani': 'dal makhani authentic indian food',
    'Butter_chicken': 'butter chicken authentic indian food',
    'Sarson_da_saag': 'sarson da saag authentic indian food',
    'Kadhi': 'kadhi chawal authentic indian food',
    'Tandoori_chicken': 'tandoori chicken authentic indian food',
    'Seekh_kebab': 'seekh kebab authentic indian food',
    'Paneer_tikka': 'paneer tikka authentic indian food',
    'Naan': 'butter naan authentic indian food',
    'Jeera_rice': 'jeera rice authentic indian food',
    'Lassi': 'punjabi sweet lassi drink in glass',
    'Gulab_jamun': 'gulab jamun authentic indian food dessert'
}

os.makedirs('public/images', exist_ok=True)

with DDGS() as ddgs:
    for key, query in dishes.items():
        try:
            results = list(ddgs.images(query, max_results=1))
            if results:
                img_url = results[0]['image']
                filename = f"{key.lower()}.jpg"
                
                req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                with urllib.request.urlopen(req) as response, open(f'public/images/{filename}', 'wb') as out_file:
                    out_file.write(response.read())
                    print(f"Downloaded {filename}")
            else:
                print(f"No results for {key}")
        except Exception as e:
            print(f"Error for {key}: {e}")
