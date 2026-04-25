import wikipedia
import requests
import os

queries = ['Dhaba India', 'Indian street food', 'Punjab cuisine restaurant']
headers = {'User-Agent': 'Mozilla/5.0'}

os.makedirs('public/images', exist_ok=True)

for query in queries:
    try:
        page = wikipedia.page(query, auto_suggest=True)
        for img in page.images:
            if img.lower().endswith('.jpg') and 'icon' not in img.lower() and 'logo' not in img.lower():
                r = requests.get(img, headers=headers, stream=True)
                if r.status_code == 200:
                    with open('public/images/dhaba_exterior.jpg', 'wb') as f:
                        for chunk in r.iter_content(1024):
                            f.write(chunk)
                    print(f"Downloaded from: {img}")
                    exit()
    except Exception as e:
        print(f"Error: {e}")
        continue
