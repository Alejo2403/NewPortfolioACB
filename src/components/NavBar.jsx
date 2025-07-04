import "../i18n/config";
import "../styles/NavBar.css";

import styled from "styled-components";

import { useTranslation } from "react-i18next";
import { useState } from 'react';

const NavBar = () => {

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <div className="navbar">
      <a href="#about"><img src="img/logo.png" alt="Logo" className="logo"/></a>

      <div className="menu_container">
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />

        <label htmlFor="menu-toggle" className="hamburger">
          <svg viewBox="0 0 32 32">
            <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
            <path className="line" d="M7 16 27 16"></path>
          </svg>
        </label>

        <ul className="menu-list">
          <li><a href="#about">{t("nav_me")}</a></li>
          <li><a href="#experience">{t("nav_experience")}</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">{t("nav_projects")}</a></li>
          <li><a href="#contactme">{t("nav_contactme")}</a></li>
          <StyledWrapper>
            <label className="switch">
              <input defaultChecked type="checkbox" className="toggle" />
              <span onClick={() => toggleLanguage()} className="slider" />
              <span onClick={() => toggleLanguage()} className="card-side" />
            </label>
          </StyledWrapper>
        </ul>
      </div>
    </div>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  .switch {
    --input-focus: #1b6ef5;
    --bg-color: #fff;
    --bg-color-alt: #666;
    --main-color: black;
    --input-out-of-focus: #ccc;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 26px;
    transform: translateX(calc(50% - 10px));
  }

  .toggle {
    opacity: 0;
  }

  .slider {
    box-sizing: border-box;
    border-radius: 100px;
    border: 2px solid var(--main-color);
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--input-out-of-focus);
    transition: 0.3s;
  }

  .slider:before {
    content: "Es";
    box-sizing: border-box;
    height: 20px;
    width: 20px;
    position: absolute;
    left: 2px;
    bottom: 1px;
    border: 2px solid var(--main-color);
    border-radius: 100px;
    background-color: var(--bg-color);
    color: var(--main-color);
    font-size: 10px;
    font-weight: 600;
    text-align: center;
    line-height: 17px;
    transition: 0.3s;
  }

  .toggle:checked + .slider {
    background-color: var(--input-focus);
    transform: translateX(-24px);
  }

  .toggle:checked + .slider:before {
    content: "En";
    transform: translateX(24px);
  }`;