from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/hello', methods=['GET'])
def hello_world():
    return jsonify({"message": "Hello, World from Flask!"})

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"})
