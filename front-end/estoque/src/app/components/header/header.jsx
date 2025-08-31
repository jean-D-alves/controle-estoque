import { Link } from "react-router-dom";
import getsingin from "../../routes/singin";
import { useState } from "react";
import { useUser } from "../hooks/useUser";

export default function Header() {
  const { user } = useUser()
  getsingin();
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={"/home"}>home</Link>
            </li>
            <li>
              <Link to={"/new-produt"}>add produt</Link>
            </li>
          </ul>
        </nav>
        {!user ? (
          <>
            <button>
              <Link to={"/login/singup"}>register</Link>
            </button>
            <button>
              <Link to={"/login/singin"}>Login</Link>
            </button>
          </>
        ) : (
          <h1></h1>
        )}
      </header>
    </div>
  );
}
