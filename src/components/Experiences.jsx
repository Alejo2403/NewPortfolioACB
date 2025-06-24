import { useTranslation } from "react-i18next";

import ExperiencesCards from "./ExperiencesCards";

import '../styles/Experience.css';
import "../i18n/config";

const Experiences = () => {

  const { t } = useTranslation();

  return (
    <section className="container_experiences">
      <h2>{t("section_exp")}</h2>

      <div className="experiences-section">
        <ExperiencesCards
          title="ManpowerGroup"
          date="01/2024 - 06/2024"
          position={t("exp_job")}
          description={t("desc_exp")}
          gain={t("gain_1")}
          gainTwo={t("gain_2")}
          gainThree={t("gain_3")}
          gainFour={t("gain_4")}
          gainFive={t("gain_5")}
        />

        <ExperiencesCards
          title="ManpowerGroup"
          date="08/2024 - 02/2025"
          position={t("exp_job2")}
          description={t("desc_exp_2")}
          gain={t("gain_2_1")}
          gainTwo={t("gain_2_2")}
          gainThree={t("gain_2_3")}
          gainFour={t("gain_2_4")}
          gainFive={t("gain_2_5")}
        />
      </div>
    </section>
  )
}

export default Experiences