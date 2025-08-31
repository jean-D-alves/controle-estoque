from flask import Flask,jsonify,request,session
from flask_cors import CORS
from dotenv import load_dotenv
import os
from model.model import newProdut,singUp

load_dotenv()
app = Flask(__name__)
CORS(app)
app.secret_key = os.getenv('SECRET_KEY')

@app.route('/api/')
def home():
    return jsonify({"msg":"bem vindo ","routes":"/api/new-produt, /api/get-produt"})

@app.route("/api/singup",methods=["POST","GET"])
def singup():
    if request.method == 'POST':
        response = request.get_json()
        name = response.get('name')
        email = response.get('email')
        password = response.get('password')
        session["user"] = {
            "name":f"{name}",
            "email":f"{email}",
            "password":f"{password}"
        }
        singUp(name,email,password)
    return jsonify({"msg":"s"})
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