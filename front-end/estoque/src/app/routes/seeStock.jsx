import { useEffect, useState } from "react";
import "./css/seeStock.css";

export default function SeeStock() {
  const [items, setitems] = useState([]);
  async function getstock() {
    try {
      const response = await fetch("/api/see-stock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({}),
      });
      const data = await response.json();
      if (data.msg == "user not logged"|| data.msg == "no items found") {
        console.log("user not logged");
      } else {
        setitems(data);
      }
    } catch (err) {
      console.log(err, "erro");
    }
  }
  useEffect(() => {
    getstock();
  }, []);

  return (
    <main id="seeStock">
      <div id="divSeeStock">
        <h2>see stock</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <strong>
                <span>name:{item.name} </span>
              </strong>
              {item.quantity} by: ${item.value}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
