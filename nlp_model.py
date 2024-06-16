from transformers import pipeline

nlp = pipeline("sentiment-analysis")

def analyze_text(text):
    return nlp(text)
