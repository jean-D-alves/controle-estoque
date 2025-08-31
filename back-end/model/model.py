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
    author = Column(String)

class User(base):
    __tablename__ = "User"

    id = Column(Integer,primary_key=True)
    name = Column(String)
    email = Column(String)
    password = Column(String)


base.metadata.create_all(engine)

def newProdut(nameProd,descripProd,valueProd,quantityProd,author):
    session = Session()
    exist = session.query(Produts).filter(Produts.name == nameProd, Produts.author== author).first()
    if not exist:
        produt = Produts(
            name=nameProd,
            description=descripProd,
            value=valueProd,
            quantity=quantityProd,
            author=author
        )
        session.add(produt)
    else:
        exist.quantity += quantityProd
        exist.description = descripProd
        exist.value = valueProd
        produt = exist
    session.commit()
    session.close()
    return produt

def singUp(name,email,password):
    session = Session()
    user = User(name=name,email=email,password=password)
    session.add(user)
    session.commit()
    session.close()
    return user