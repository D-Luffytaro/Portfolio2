import "./header.css";
import ME from "../../assets/images/me.png";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";

export default function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, je suis</h5>
        <h1>Régina Toupin</h1>
        <div className="text-light">Développeuse web</div>
        <CTA />
        <div className="me">
          <img src={ME} alt="ME" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
}
