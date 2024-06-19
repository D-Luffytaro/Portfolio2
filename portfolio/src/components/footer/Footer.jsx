import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#about">À propos</a>
        </li>
      </ul>
      <div className="footer__copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  );
}
