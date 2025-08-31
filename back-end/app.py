from flask import Flask,jsonify,request,session
from flask_cors import CORS
from dotenv import load_dotenv
import os
from model.model import newProdut,singUp,singin

load_dotenv()
app = Flask(__name__)
CORS(app , supports_credentials=True)
app.secret_key = os.getenv('SECRET_KEY')

@app.route('/api/')
def home():
    return jsonify({"msg":f"bem vindo","routes":"/api/new-produt, /api/get-produt"})

@app.route("/api/singup",methods=["POST","GET"])
def singup():
    if request.method == 'POST':
        response = request.get_json()
        name = response.get('name')
        email = response.get('email')
        password = response.get('password')
        user = singUp(name,email,password)
        if user:
            return jsonify({"user": f"{name}"})
    return jsonify({"user": 'msg'})
@app.route("/api/singin", methods=["POST"])
def singin_route():
    response = request.get_json()
    name = response.get('name')
    password = response.get('password')
    user = singin(name,password)
    if user:
        return jsonify({"msg": "user registered", "user": user})
    else:
        return jsonify({"msg": "user not exist"})
@app.route('/api/new-produt', methods=["POST"])
def newprodut():
    user = session.get('user')
    response = request.get_json()
    nomeProd = response.get('nomeProd')
    descripProd = response.get('descripProd')
    valueProd = int(response.get('valueProd'))
    quantityProd = int(response.get('quantityProd'))
    author = user['name']
    newProdut(nomeProd,descripProd,valueProd,quantityProd,author)
    return jsonify()

if __name__ =="__main__":
    app.run(debug=True)