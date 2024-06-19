import { LuPalette, LuSearchCode } from "react-icons/lu";
import { PiChats } from "react-icons/pi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ME from "../../assets/images/me-about.jpeg";
import "./about.css";

export default function About() {
  return (
    <section id="about">
      <h5>Présentation</h5>
      <h2>À Propos de moi</h2>
      <div className="container about__container">
        <div className="about__me">
          <img className="about__me-image" src={ME} alt="me" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <LuPalette className="about__icon" />
              <h5>Créative</h5>
            </article>
            <article className="about__card">
              <PiChats className="about__icon" />
              <h5>Capacité d’adaptation</h5>
            </article>
            <article className="about__card">
              <LuSearchCode className="about__icon" />
              <h5>Curiosité</h5>
            </article>
          </div>
          <p>
            Passionnée par le dessin et l'art, j'ai choisi de combiner ces
            intérêts avec la technologie. J'ai acquis les bases de plusieurs
            langages web tels que HTML, CSS et JavaScript. Parallèlement, je
            développe une affinité pour le design. <br />
            Dans le but d'approfondir mes compétences, je suis résolue à suivre
            une formation de Concepteur Développeur d'Applications Web (niveau
            6, équivalent bac+4) à l'école O'clock, sur une durée de 20 mois en
            alternance.
          </p>
          <a href="#contact" className="btn btn-primary arrow">
            Contactez moi <HiOutlineArrowLongRight />
          </a>
        </div>
      </div>
    </section>
  );
}
