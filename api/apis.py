from flask import Flask
from waitress import serve

app = Flask(__name__)

# I don't conceptually understand what return does
# HTML code vs JSON response


@app.route('/get-members/')
def get_members():
    return "<h1>yo</h1>"
    # return {"message": "yo"}

# Get all members


if __name__ == "__main__":
    app.run(host='0.0.0.0')
    serve(app, host='0.0.0.0', port=5000, url_scheme='https')
