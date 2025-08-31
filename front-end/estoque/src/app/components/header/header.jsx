import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header>
        <ul>
          <li>
            <Link to={"/home"}>home</Link>
          </li>
          <li>
            <Link to={"/new-produt"}>add produt</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
