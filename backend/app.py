from flask import Flask, request
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient('mongodb://db:27017/')
db = client.user_data

@app.route('/api/submit', methods=['POST'])
def submit():
    data = request.json
    db.users.insert_one(data)
    return {"message": "Data stored successfully"}, 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
