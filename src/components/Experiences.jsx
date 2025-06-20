import { useTranslation } from "react-i18next";

import ExperiencesCards from "./ExperiencesCards";

import '../styles/Experience.css';
import "../i18n/config";

const Experiences = () => {

  const { t } = useTranslation();

  return (
    <section className="container_experiences">
      <h2>Experiencia Profesional</h2>

      <div className="experiences-section">
        <ExperiencesCards
          title="ManpowerGroup"
          date="01/2024 - 06/2024"
          position={t("exp_job")}
          description="Trabajé en el desarrollo de interfaces modernas con React, optimizando el rendimiento y la accesibilidad."
        />

        <ExperiencesCards
          title="ManpowerGroup"
          date="08/2024 - 02/2025"
          position={t("exp_job2")}
          description="Responsable del diseño e implementación de nuevas funciones e integraciones en React."
        />
      </div>
    </section>
  )
}

export default Experiences