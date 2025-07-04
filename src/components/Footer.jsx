import "../styles/Footer.css";

import { useTranslation } from "react-i18next";

const Footer = () => {

    const { t } = useTranslation();

  return (
  <footer className="footer">
    <div className="contactMe">
      <h3 className="title_footer" id="contactme">{t("nav_contactme")}</h3>
      <p className="footer_available">
        {t("desc_contact")}
      </p>

      {/* WhatsApp */}
      <a href="https://wa.me/573195971319" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp_btn"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          textDecoration: "none",
          color: "#25D366",
          fontWeight: "bold"
        }}
      >
        <img 
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
          alt="WhatsApp" 
          width="20" 
          height="20" 
          style={{ filter: "drop-shadow(0 0 1px #000)" }}
        />
        {t("b_whatsapp")}
      </a>

      {/* Gmail */}
      <a 
        href="mailto:alejandro240301@gmail.com" 
        className="contact_link" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          height="20"
        >
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
        <span style={{ marginLeft: "8px" }}>alejandro240301@gmail.com</span>
      </a>

      <p className="footer_location">📍 Medellín, Colombia</p>
    </div>

    <div className="copy">
      <p className="copy_text">
        © {new Date().getFullYear()} Alejandro Cardona Barrera
      </p>
    </div>
  </footer>
  )
}

export default Footer