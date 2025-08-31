import { useState } from "react";

export default function Singup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  async function postSingup(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/singup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
    } catch (err) {
      console.log("erro", err);
    }
  }
  return (
    <div>
      <form onSubmit={postSingup}>
        <input
          type="text"
          placeholder="Enter your name user"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <input type="submit" value={"sing-up"} />
      </form>
    </div>
  );
}
