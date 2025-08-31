import { useEffect, useState } from "react";
import { useUser } from "../components/hooks/useUser";

export default function Singin() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [logado, setlogado] = useState(false);
  const { user } = useUser();
  async function postsingin(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/singin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          name: name,
          password: password,
        }),
      });
      const data = await response.json();
      if (data.msg === "user logged") {
        setlogado(true);
      }
    } catch (err) {
      console.log(err, "erro");
    }
  }
  return (
    <div>
      {!user ? (
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
