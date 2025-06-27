import "../styles/Projects.css"

const projects = [
    {
        name: "Seguimiento Veterinaria",
        image: "../img/..",
        description: "",
        link: "https://meek-cendol-496869.netlify.app/",
        techs: [
            { 
                icon: "react",
                comp:"original"
            }
        ]
    },
    {
        name: "Cotizador de Cryptomonedas",
        image: "../img/..",
        description: "",
        link: "https://keen-lichterman-71b8d5.netlify.app/",
        techs: [
            { 
                icon: "react",
                comp:"original"
            }
        ]
    },
    {
        name: "CRM con INDEX-DB",
        image: "../img/..",
        description: "",
        link: "https://musing-raman-49901f.netlify.app/",
        techs: [
            { 
                icon: "react",
                comp:"original"
            }
        ]
    },
    {
        name: "Cotizador de Seguros de autos",
        image: "../img/..",
        description: "",
        link: "https://reverent-mayer-23ed00.netlify.app/",
        techs: [
            { 
                icon: "react",
                comp:"original"
            }
        ]
    },
    {
        name: "Pruebas de local Storage",
        image: "../img/..",
        description: "",
        link: "https://determined-kalam-fdf323.netlify.app/",
        techs: [
            { 
                icon: "react",
                comp:"original"
            }
        ]
    },
]

const Projects = () => {
    return (   
        <section className="projects_section">
        <h2>🚀 Proyectos</h2>
        <div className="projects_grid">
            {projects.map((project, index) => (
            <div className="project_card" key={index}>
                <img src={project.image} alt={project.name} className="project_image" />
                <div className="project_content">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">🔗 Ver Proyecto</a>
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