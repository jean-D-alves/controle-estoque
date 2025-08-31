from flask import Flask,jsonify,request
from flask_cors import CORS
from model.model import newProdut

app = Flask(__name__)
CORS(app)

@app.route('/api/')
def home():
    return jsonify({"msg":"bem vindo ","routes":"/api/new-produt, /api/get-produt"})
@app.route('/api/new-produt', methods=["POST"])
def newprodut():

    response = request.get_json()
    nomeProd = response.get('nomeProd')
    descripProd = response.get('descripProd')
    valueProd = int(response.get('valueProd'))
    quantityProd = int(response.get('quantityProd'))
    newProdut(nomeProd,descripProd,valueProd,quantityProd)
    
    return jsonify()

if __name__ =="__main__":
    app.run(debug=True)