from flask import request, jsonify, Blueprint


gen_controller_endpoints = Blueprint("controller", __name__)


@gen_controller_endpoints.route("/test", methods=["GET"])
def test_controller():
    data = "Hello from Gen Controller"
    return jsonify(data)