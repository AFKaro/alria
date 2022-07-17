from flask import Flask
from services.configurations.app_configuration import AppConfiguration

app = Flask(__name__)
wsgi_app = app.wsgi_app

config = AppConfiguration.configure()

keys = "flask"

api_name = config[keys[0]].get("api_name")
api_port = config[keys[0]].get("api_port")
debug = config[keys[0]].get("debug")
threaded = config[keys[0]].get("threaded")

default_error_message = "An unknown error has occurred."


if __name__ == "__main__":
    app.run(
        host="0.0.0.0", port=int(api_port, debug=bool(debug), threaded=bool(threaded))
    )