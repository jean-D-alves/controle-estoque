import { Link } from "react-router-dom";

export default function Header() {
  
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
        <button><Link to={"/login/singup"}>register</Link></button>
        <button><Link to={"/login/singin"}>Login</Link></button>
      </header>
    </div>
  );
}
