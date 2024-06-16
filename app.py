from flask import Flask, request, jsonify
from model.nlp_model import analyze_text

app = Flask(__name__)

@app.route('/api/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text = data['text']
    analysis = analyze_text(text)
    return jsonify(analysis)

if __name__ == '__main__':
    app.run(port=5001, debug=True)
