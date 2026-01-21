from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return jsonify({"message": "Hello, World from Flask!"})

@app.route('/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello, World from Flask!"})

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"})
