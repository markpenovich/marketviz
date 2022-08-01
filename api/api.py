import time
from flask import Flask
from datetime import datetime

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': datetime.fromtimestamp(time.time())}
