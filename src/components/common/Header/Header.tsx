import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import style from "./header.module.scss";

function Header() {
  return (
    <header>
      <div className={style.container}>
        <div id={style.logo}>
          <Link to="/">
            <img className="responsive" src={logo} alt="Logo Kasa" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Acceuil</NavLink>
            </li>
            <li>
              <NavLink to="/a-propos">A propos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
