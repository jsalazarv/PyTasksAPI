from flask import Flask

app = Flask(__name__)


@app.route("/")
def root():
    return {"message": "¡Bienvenido a la API de TodoList!"}


if __name__ == "__main__":
    app.run(debug=True)
