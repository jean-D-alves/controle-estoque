import { useState } from "react";

export default function NewProdut() {
  const [nomeProd, setNomeProd] = useState("");
  const [descripProd, setDescripProd] = useState("");
  const [valueProd, setValueProd] = useState("");
  const [quantityProd, setQuantityProd] = useState("");
  const [add,setadd] = useState(false)
  async function PostProdut(e) {
    e.preventDefault();
    try {
      const response = await fetch("api/new-produt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nomeProd: nomeProd,
          descripProd: descripProd,
          valueProd: valueProd,
          quantityProd: quantityProd,
        }),
      });
      const data = await response.json();
      if(data.msg === "add item"){
        setadd(true)
      }
    } catch (err) {
      console.log("erro", err);
    }
  }
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="add name produt"
          value={nomeProd}
          onChange={(e) => setNomeProd(e.target.value)}
        />
        <input
          type="text"
          placeholder="add description produt"
          value={descripProd}
          onChange={(e) => setDescripProd(e.target.value)}
        />
        <input
          type="number"
          placeholder="add value produt"
          value={valueProd}
          onChange={(e) => setValueProd(e.target.value)}
        />
        <input
          type="number"
          placeholder="add quantity produt"
          value={quantityProd}
          onChange={(e) => setQuantityProd(e.target.value)}
        />
        <button type="submit" onClick={PostProdut}>
          submit
        </button>
      </form>
      {add ?(
        <h3>item adicioned</h3>
      ):(
        <h3></h3>
      )}
    </div>
  );
}
