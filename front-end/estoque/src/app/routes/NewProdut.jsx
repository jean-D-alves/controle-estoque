import { useState } from "react";
import "./css/newprodut.css";

export default function NewProdut() {
  const [nomeProd, setNomeProd] = useState("");
  const [descripProd, setDescripProd] = useState("");
  const [valueProd, setValueProd] = useState("");
  const [quantityProd, setQuantityProd] = useState("");
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
      if (data.msg === "add item") {
        alert("item adicionado");
      }
    } catch (err) {
      console.log("erro", err);
      alert("add it again and mack make sure to check everything");
    }
  }
  return (
    <div id="mainNewProdut">
      <form id="formNP">
        <h1>Add new produt</h1>
        <label htmlFor="name">produt name:</label>
        <input
          type="text"
          name="name"
          placeholder="add produt name"
          value={nomeProd}
          onChange={(e) => setNomeProd(e.target.value)}
        />
        <label htmlFor="description">produt description :</label>
        <input
          type="text"
          name="description"
          placeholder="add produt description"
          value={descripProd}
          onChange={(e) => setDescripProd(e.target.value)}
        />
        <label htmlFor="value">value produt</label>
        <input
          type="number"
          name="value"
          placeholder="add value produt"
          value={valueProd}
          onChange={(e) => setValueProd(e.target.value)}
        />
        <label htmlFor="range">quantity:</label>
        <input
          type="range"
          name="range"
          id="range"
          min={0}
          max={100}
          slep={1}
          value={quantityProd}
          onChange={(e) => setQuantityProd(e.target.value)}
        />
        <span style={{ marginLeft: "10px" }}>{quantityProd}</span>
        <button className="btn" type="submit" onClick={PostProdut}>
          <strong>submit</strong>
        </button>
      </form>
    </div>
  );
}
