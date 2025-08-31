from sqlalchemy import create_engine, Column, String,Integer
from sqlalchemy.orm import declarative_base,sessionmaker

engine = create_engine("sqlite:///database.db",echo=True)
base = declarative_base()

Session = sessionmaker(bind=engine)

class Produts(base):
    __tablename__ = "produts"

    id = Column(Integer,primary_key=True)
    name = Column(String)
    description = Column(String)
    value = Column(Integer)
    quantity = Column(Integer)

base.metadata.create_all(engine)

def newProdut(nameProd,descripProd,valueProd,quantityProd):
    session = Session()
    produt = Produts(name=nameProd,description=descripProd,value=valueProd,quantity=quantityProd)
    session.add(produt)
    session.commit()
    session.close()
    return produt