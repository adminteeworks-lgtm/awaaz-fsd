from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Database (filhal list me save)
issues_db = []

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit_issue():
    data = request.json
    print(f"Naya Masla: {data}")
    issues_db.append(data)
    # Yahan se ye data Database me jayega
    return jsonify({"status": "success", "msg": "Faisalabad City ka masla Python ne save kar liya!"})

if __name__ == '__main__':
    app.run(debug=True)

