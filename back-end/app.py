from flask import Flask,jsonify,request,session
from flask_cors import CORS
from dotenv import load_dotenv
import os
from model.model import newProdut,singUp,singin,seeStock,deleteProd

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
        session["dataUser"] = {"username": name,"password":password }
        if user:
            return jsonify({"msg": f"user {name} registed"})
    return jsonify({"msg": 'erro'})
@app.route("/api/singin", methods=["POST"])
def singin_route():
    response = request.get_json()
    name = response.get('name')
    password = response.get('password')
    user = singin(name,password)
    if user:
        session["dataUser"] = {"username": name, "password": password}
        return jsonify({"msg": "user logged", "name": name})
    else:
        return jsonify({"msg": "user not exist"})
    
@app.route("/api/profile")
def profile():
    datauser = session.get("dataUser")
    if datauser:
        return jsonify(datauser)
    return jsonify({"error": "user not exist"})
@app.route('/api/new-produt', methods=["POST"])
def newprodut():
    user = session.get('dataUser')
    response = request.get_json()
    nomeProd = response.get('nomeProd')
    descripProd = response.get('descripProd')
    valueProd = int(response.get('valueProd'))
    quantityProd = int(response.get('quantityProd'))
    author = user['username']
    mewprodut = newProdut(nomeProd,descripProd,valueProd,quantityProd,author)
    if newprodut:
        return jsonify({"msg":"add item"})
    return jsonify()
@app.route('/api/see-stock', methods=['POST'])
def see_stock_route():
    user = session.get('dataUser')
    if not user:
        return jsonify({"msg": "user not logged"})
    author = user['username']
    items = seeStock(author) 
    if not items:
        return jsonify({"msg": "no items found"})
    return jsonify(items)
@app.route('/api/delete', methods=['POST'])
def delete():
    user = session.get('dataUser')
    response = request.get_json()
    name = response.get("name")
    quantity = int(response.get("quantity"))
    author = user["username"]
    if user:
        result = deleteProd(name,quantity,author)
    else:
        result = ({"user not exist"})
    return jsonify(result)
if __name__ =="__main__":
    app.run(debug=True)