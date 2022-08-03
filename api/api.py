import time
import requests
from flask import Flask
from datetime import datetime

app = Flask(__name__)
# OMDBAPI key: 68c54217
api_url = 'http://www.omdbapi.com?apikey=68c54217&s='

@app.route('/movies/<title>')
def get_movies(title):
    response = requests.get(api_url + title)
    return response.json()
