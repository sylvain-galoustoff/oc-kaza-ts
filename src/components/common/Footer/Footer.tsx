import logo from "../../../assets/logo-black.png";
import style from "./footer.module.scss";

function Footer() {
  return (
    <footer>
      <div className={style.container}>
        <div id={style.footerLogo}>
          <img src={logo} alt="Logo casa blanc" className="responsive" />
        </div>
        <p id={style.legal}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
