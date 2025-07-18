import "../i18n/config";
import "../styles/Skills.css"
import { useTranslation } from "react-i18next";
const Skills = () => {
  
  const { t, i18n } = useTranslation();

  const skills = {
    principales: [
      { name: "React", icon: "react", level: t("level_adv"), comp: "original"},
      { name: "JavaScript", icon: "javascript", level: t("level_adv"), comp: "original" },
      { name: "Node.js", icon: "nodejs", level: t("level_adv"), comp: "original" },
      { name: "Python", icon: "python", level: t("level_int"), comp: "original" },
      { name: "Django", icon: "django", level: t("level_int"), comp: "plain" },
      { name: "Typescript", icon: "typescript", level: t("level_int"), comp: "plain" },
    ],
    adicionales: [
      { name: "Vue.js", icon: "vuejs", level: t("level_bas"), comp: "original" },
      { name: "Angular", icon: "angularjs", level: t("level_bas"), comp: "original" },
      { name: "Laravel", icon: "laravel", level: t("level_int"), comp: "original" },
      { name: "PHP", icon: "php", level: t("level_bas"), comp: "original" }
    ],
    datos: [
      { name: "MongoDB", icon: "mongodb", level: t("level_int"), comp: "original" },
      { name: "SQL", icon: "azuresqldatabase", level: t("level_int"), comp: "original" },
      { name: "Excel", icon: "pytest", level: t("level_adv"), comp: "original" },
    ],
    herramientas: [
      { name: "Git", icon: "git", level: t("level_int"), comp: "original" },
      { name: "GitHub", icon: "github", level: t("level_int"), comp: "original" },
      { name: "Postman", icon: "postman", level: t("level_int"), comp: "original" },
      { name: "AWS", icon: "amazonwebservices", level: t("level_int"), comp: "original-wordmark" }
    ]
  }

  const SkillGroup = ({ title, list }) => (
    <div className="skill_group">
      <h3 className="title_skill">{title}</h3>
      <ul className="skills_list">
        {list.map(({ name, icon, level, comp }) => (
          <li key={name} className="skill_item">
            <img
              src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-${comp}.svg`}
              alt={name}
              title={name}
              className="skill_icon"
            />
            <span className="tech_name">{name}</span>
            <span className={`level level_${level.toLowerCase()}`}>{level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
  
  return (
    <section className="container_skills">
      <h2 id="skills"  className="title_skills">🛠️Skills</h2>
      <div className="skills_section">
        <div className="skills_right">
          <SkillGroup title={t("title_skill_1")} list={skills.principales} />
          <SkillGroup title={t("title_skill_2")} list={skills.adicionales} />
        </div>
        <div className="skills_left">
          <SkillGroup title={t("title_skill_3")} list={skills.datos} />
          <SkillGroup title={t("title_skill_4")} list={skills.herramientas} />
        </div>
      </div>
    </section>
  );
}

export default Skills