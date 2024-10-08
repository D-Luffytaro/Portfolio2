import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

export default function HeaderSocials() {
  return (
    <div className="header__socials">
    <a
      href="https://www.linkedin.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsLinkedin />
    </a>
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
      <FaGithub />
    </a>
  </div>
  )
}
