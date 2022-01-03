from flask import Flask, json, send_from_directory, jsonify, request
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment

from service import Service

app = Flask(__name__)
CORS(app) #comment this on deployment


service =  Service()

@app.route("/time", methods=["POST"])
def serve():
	keyword = request.json['keyword']
	data = service.get_data_by_time(keyword)
	return jsonify(data)

@app.route("/region", methods=["POST"])
def serve_region():
	keyword = request.json['keyword']
	data  = service.get_data_by_region(keyword)
	return jsonify(data)

@app.route("/test")
def test_backend():
    return jsonify("Hey, The backend is running")


if __name__ == "__main__":
	app.run(port=5000, debug=True)

