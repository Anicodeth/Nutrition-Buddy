import requests

apiKey = 'b144d0da36bb499e84bdde367e7f8919'
url = 'https://api.spoonacular.com/recipes/complexSearch'

def get_recipes(body):
    body['apiKey'] = apiKey
    try:
        response = requests.get(url, body)
        if response.status_code == 200:
            return response.json()
        else: 
            print('Error: ', response.status_code)
            return None
    except requests.exceptions.RequestException as e:
        print("Request Error", e)
        return None


