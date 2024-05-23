import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useEffect, useState } from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { GiHamburgerMenu } from "react-icons/gi";
import IconMaster from "../IconMaster/IconMaster";
import { useSelector } from "react-redux";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const logo = useSelector(state=>state.content.company.logo)
  const name = useSelector(state=>state.content.company.name)
  const language = useSelector(state=>state.content.language)
  const navbar = useSelector(state=>state.content.texts[language].navbar)
  const main = useSelector(state=>state.content.texts[language].main)
  const handleScroll = () => {
    const offset = window.pageYOffset;
    setScrolled(offset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div id="home" className="navbar">
      <div className={scrolled ? "navbar-menu scrolled" : "navbar-menu"}>
        <div className="container">
          <div className="navbar-logo">{logo ? (<img className="navbar-logo-image" src={scrolled ?  `${logo}.png` : `${logo}-white.png`} />) : (<span>{name}</span>)}</div>
          <label className="navbar-menu-button" htmlFor="navbar-menu-toggle"><IconMaster iconName="burger" size="21px"/></label>
          <input id="navbar-menu-toggle" type="checkbox" className="navbar-menu-toggle" />
          <ul>
            <li>
              <a className="nav-link" href="#home">
                {navbar?.home}
              </a>
            </li>
            <li>
              <a className="nav-link" href="#offers">
              {navbar?.offers}
              </a>
            </li>
            <li>
              <a className="nav-link" href="#candidates">
              {navbar?.candidates}
              </a>
            </li>
            <li>
              <a className="nav-link" href="#contact">
              {navbar?.contacts}
              </a>
            </li>
            <li>
              <LanguageSelector/>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-content">
        <div className="container">
          <h3>{main?.header}</h3>
          <p>
          {main?.description}
          </p>
          <a className="nav-link" href="#contact">
          {main?.button}
          </a>
        </div>
      </div>
    </div>
  );
}
