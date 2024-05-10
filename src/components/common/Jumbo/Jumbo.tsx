import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import homeImg from "../../../assets/jumbo/home.jpg";
import aboutImg from "../../../assets/jumbo/a-propos.jpg";
import style from "./Jumbo.module.scss";

function Jumbo() {
  const location = useLocation();
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    if (location.pathname === "/a-propos") {
      setImgSrc(aboutImg);
    } else {
      setImgSrc(homeImg);
    }
  }, [setImgSrc, location]);

  return (
    <div id={style.jumbo}>
      <img className="responsive" src={imgSrc} alt="paysage d'illustration" />
      <div className={style.layer}>
        <h1 id={style.slogan}>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}

export default Jumbo;
