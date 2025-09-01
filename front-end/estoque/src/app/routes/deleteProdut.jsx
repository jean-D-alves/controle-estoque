import { useState } from "react";
import "./css/deleteProd.css";

export default function DeleteProd() {
  const [name, setname] = useState("");
  const [quantity, setQuantity] = useState("");
  const [msg, setmsg] = useState("");
  async function delet(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: name,
          quantity: quantity,
        }),
      });
      const data = await response.json();
      setmsg(data.msg);
    } catch (err) {
      console.log(err, "erro");
    }
  }
  return (
    <div id="mainDelete">
      <form onSubmit={delet}>
        <h2>delete items</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="enter produt name want to delete"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="range"
          name="quantity"
          min={0}
          max={100}
          slep={1}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <span style={{ marginLeft: "10px" }}>{quantity}</span>
        <button className="btn" type="submit">
          delete
        </button>
        {msg && (
          <div>
            <strong>{msg}</strong>
          </div>
        )}
      </form>
    </div>
  );
}
