import { useState } from "react";

export default function Singin() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [logado, setlogado] = useState(false);
  async function postsingin(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/singin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          password: password,
        }),
        credentials: "include",
      });
      const data = await response.json();
      if (data.msg === "user registered") {
        setlogado(true);
      }
    } catch (err) {
      console.log(err, "erro");
    }
  }
  return (
    <div>
      {!logado ? (
        <form onSubmit={postsingin}>
          <input
            type="text"
            placeholder="Enter you name user"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter you password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          <input type="submit" value={"submit"} />
        </form>
      ) : (
        <h1>User logged in</h1>
      )}
    </div>
  );
}
