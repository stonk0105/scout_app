"""
本地開發用 Flask 服務器腳本
用於在開發環境中測試 Flask 後端
"""
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # 允許跨域請求

@app.route('/api/hello', methods=['GET'])
def hello_world():
    return jsonify({"message": "Hello, World from Flask!"})

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({"status": "healthy"})

if __name__ == '__main__':
    app.run(port=5328, debug=True)
