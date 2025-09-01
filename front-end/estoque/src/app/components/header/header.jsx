import { Link } from "react-router-dom";
import getsingin from "../../routes/singin";
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import "./header.css";

export default function Header() {
  const { user } = useUser();
  getsingin();
  return (
    <div id="mainHeader">
      <header>
        <h1 id="titleHeader">Stock</h1>
        <section>
          <nav id="spaceNav">
            <ul>
              <li>
                <Link to={"/home"} className="routesHeader">
                  home
                </Link>
              </li>
              <li>
                <Link to={"/new-produt"} className="routesHeader">
                  add produt
                </Link>
              </li>
              <li>
                <Link to={"/get-stock"} className="routesHeader">
                  see stock
                </Link>
              </li>
              {!user ? (
                <>
                  <button className="btnHeader">
                    <Link to={"/login/singup"} className="buttonHeader">
                      <strong>register</strong>
                    </Link>
                  </button>
                  <button className="btnHeader">
                    <Link to={"/login/singin"} className="buttonHeader">
                      <strong>Login</strong>
                    </Link>
                  </button>
                </>
              ) : (
                <h1></h1>
              )}
            </ul>
          </nav>
        </section>
      </header>
    </div>
  );
}
