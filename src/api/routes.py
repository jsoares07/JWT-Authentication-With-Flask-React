"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    # email = "jose"
    # password =  "12345"
    email = request.json.get("email", None)
    password = request.json.get("password",None)
    access_token = create_access_token(identity=email)

    user = User(
        email = email,
        password = password,
        is_active = True
    )

    user.serialize()
    user.create()

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request",
        "acces_token": access_token,
        "user" : user.serialize(),

    }

    return jsonify(response_body), 200
