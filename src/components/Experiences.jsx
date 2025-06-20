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
          description={t("desc_exp")}
        />

        <ExperiencesCards
          title="ManpowerGroup"
          date="08/2024 - 02/2025"
          position={t("exp_job2")}
          description={t("desc_exp_2")}
        />
      </div>
    </section>
  )
}

export default Experiences