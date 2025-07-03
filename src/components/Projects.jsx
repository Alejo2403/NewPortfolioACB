import { t } from "i18next";
import "../styles/Projects.css"
import { useTranslation } from "react-i18next";

const Projects = () => {

    const { t } = useTranslation();
    
    const projects = [
        {
            name: t("t_project_1"),
            image: "/img/p_one.png",
            description: "",
            link: "https://meek-cendol-496869.netlify.app/",
            techs: [
                { 
                    icon: "react",
                    comp:"original"
                },
                {
                    icon: "html5",
                    comp: "original"
                },
                {
                    icon: "css3",
                    comp: "original"
                },
                {
                    icon: "javascript",
                    comp: "original"
                }
            ]
        },
        {
            name: t("t_project_2"),
            image: "/img/p_two.png",
            description: "",
            link: "https://keen-lichterman-71b8d5.netlify.app/",
            techs: [
                { 
                    icon: "react",
                    comp:"original"
                },
                {
                    icon: "html5",
                    comp: "original"
                },
                {
                    icon: "tailwindcss",
                    comp: "original"
                },
                {
                    icon: "javascript",
                    comp: "original"
                }
            ]
        },
        {
            name: t("t_project_3"),
            image: "/img/p_three.png",
            description: "",
            link: "https://musing-raman-49901f.netlify.app/",
            techs: [
                { 
                    icon: "react",
                    comp:"original"
                },
                {
                    icon: "html5",
                    comp: "original"
                },
                {
                    icon: "css3",
                    comp: "original"
                },
                {
                    icon: "typescript",
                    comp: "original"
                }
            ]
        },
        {
            name: t("t_project_4"),
            image: "/img/p_four.png",
            description: "",
            link: "https://reverent-mayer-23ed00.netlify.app/",
            techs: [
                { 
                    icon: "python",
                    comp:"original"
                },
                {
                    icon: "html5",
                    comp: "original"
                },
                {
                    icon: "bulma",
                    comp: "plain"
                },
                {
                    icon: "django",
                    comp: "plain"
                }
            ]
        },
        {
            name: t("t_project_5"),
            image: "img/p_five.png",
            description: "",
            link: "https://determined-kalam-fdf323.netlify.app/",
            techs: [
                { 
                    icon: "angular",
                    comp:"original"
                },
                {
                    icon: "html5",
                    comp: "original"
                },
                {
                    icon: "tailwindcss",
                    comp: "original"
                },
                {
                    icon: "typescript",
                    comp: "plain"
                }
            ]
        },
    ]

    return (   
        <section id="projects" className="projects_section">
        <h2>🚀 {t("tiitle_pro")}</h2>
        <div className="projects_grid">
            {projects.map((project, index) => (
            <div className="project_card" key={index}>
                <img src={project.image} alt={project.name} className="project_image" />
                <div className="project_content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">🔗 <span className="see_project">{t("b_see_p")}</span></a>
                    <div className="project_techs">
                        {project.techs.map((tech, idx) => (
                        <img
                            key={idx}
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}/${tech.icon}-${tech.comp}.svg`}
                            alt={tech.name}
                            title={tech.name}
                            width="24"
                        />
                        ))}
                    </div>
                </div>
            </div>
            ))}
        </div>
        </section>
  );
}

export default Projects