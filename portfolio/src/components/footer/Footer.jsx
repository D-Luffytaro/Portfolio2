import "./footer.css";
import { FaGithub, FaPinterest, FaLinkedin } from "react-icons/fa";
import { PiFlowerTulipLight } from "react-icons/pi";

export default function Footer() {
  return (
    <footer>
      <div className="footer container">
        <div className="footer_right">
          <small>
            <PiFlowerTulipLight /> Régina
          </small>
        </div>
        <div className="footer__social">
          <a>
            <FaLinkedin />
          </a>
          <a>
            <FaGithub />
          </a>
          <a>
            <FaPinterest />
          </a>
        </div>
      </div>
    </footer>
  );
}
