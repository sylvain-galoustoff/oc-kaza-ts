import { Link } from "react-router-dom";
import style from "./NotFound.module.scss";

function NotFound() {
  return (
    <div className="page container" id={style.notFound}>
      <p id={style.big404}>404</p>
      <p id={style.errorMessage}>
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
  );
}

export default NotFound;
