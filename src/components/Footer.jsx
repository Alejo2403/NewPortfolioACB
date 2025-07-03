import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="contactMe">
            <h3 className="title_footer">Contact me</h3>
            <p className="footer_available">Abierto a nuevas oportunidades laborales. Contáctame si crees que encajo en tu equipo.</p>
            <p></p>
            <a href="https://wa.me/573195971319" target="_blank" rel="noopener noreferrer" className="whatsapp_btn">
                Escríbeme por WhatsApp
            </a>
            <p className="footer_location">📍 Medellín, Colombia</p>
        </div>
        <div className="copy">
            <p className="copy_text">© {new Date().getFullYear()} Alejandro Cardona Barrera</p>
        </div>
    </footer>
  )
}

export default Footer