const SocialIcons = () => {
  return (
    <ul className="wrapper">
        <li className="icon facebook">
            <a 
                href="https://www.linkedin.com/in/alejandro-cardona-barrera-310b8a263/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-linkedin"
            >
                <span className="tooltip">Linkedin</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512" 
                    height="1.2em" 
                    fill="currentColor"
                >
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.71 53.71 0 1 1 53.7-53.7 53.7 53.7 0 0 1-53.7 53.7zM447.9 448h-92.4V302.4c0-34.7-.7-79.3-48.3-79.3-48.3 0-55.7 37.7-55.7 76.6V448H159V148.9h88.7v40.8h1.3c12.4-23.6 42.5-48.3 87.5-48.3 93.5 0 110.7 61.5 110.7 141.3V448z"/>
                </svg>
            </a>
        </li>
        <li className="icon twitter">
            <a 
                href="https://github.com/Alejo2403"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-github"
            >
                <span className="tooltip">GitHub</span>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    height="1.2em" 
                    fill="currentColor"
                >
                    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.083-.731.083-.731 1.205.085 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
            </a>
        </li>
        <li className="icon instagram">
            <a 
                href="mailto:alejandro240301@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-gmail"
            >
                <span className="tooltip">Gmail</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    height="1.2em"
                >
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
            </a>
        </li>
    </ul>
  )
}

export default SocialIcons