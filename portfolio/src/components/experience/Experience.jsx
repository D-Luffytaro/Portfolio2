import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaFigma,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAdobeillustrator } from "react-icons/si";
import "./experience.css";

export default function Experience() {
  return (
    <section id="experience">
      <h5>Mes softskills</h5>
      <h2>Mes compétences</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCss3Alt className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermédiaire</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoJavascript className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Les bases</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Les bases</small>
              </div>
            </article>
            <article className="experience__details">
              <RiTailwindCssFill className="experience__details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Les bases</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__tools">
          <h3>Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaFigma className="experience__details-icon" />
              <div>
                <h4>Figma</h4>
                <small className="text-light">Les bases</small>
              </div>
            </article>
            <article className="experience__details">
              <SiAdobeillustrator className="experience__details-icon" />
              <div>
                <h4>Illustrator</h4>
                <small className="text-light">Les bases</small>
              </div>
            </article>
            <article className="experience__details">
              <FaGitAlt className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Les bases</small>
              </div>
            </article>
            <article className="experience__details">
              <FaGithub className="experience__details-icon" />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Les bases</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
