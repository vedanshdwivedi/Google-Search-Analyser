# from flask import Flask, send_from_directory
# from flask_cors import CORS

# from controller.controller import gen_controller_endpoints

# app = Flask(__name__, static_url_path='', static_folder='frontend/google_analyser/public')
# CORS(app)
# app.register_blueprint(gen_controller_endpoints)

# @app.route("/", defaults={'path': ''})
# def hello_world(path):
#     print(path)
#     print(app.static_folder)
#     return send_from_directory(app.static_folder, 'index.html')


# if __name__ == "__main__":
#     app.run(port=5001)