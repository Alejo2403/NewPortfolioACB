import { useTranslation } from "react-i18next";
import {useRef, useState} from 'react'

import "../styles/ExperiencesCards.css"
import "../i18n/config";

const ExperiencesCards = ({title, date, position, description, gain, gainTwo, gainThree, gainFour, gainFive}) => {
  
    const { t } = useTranslation();

    const detailsRef = useRef(null);
    const [ isOpen, setIsOpen ] = useState(false); 
  
    const toggleAnimation = (e) => {
        e.preventDefault();
        const details = detailsRef.current;
        if (details.open) {
            details.classList.add("closing");
            setTimeout(() => {
                details.open = false;
                details.classList.remove("closing");
                setIsOpen(false);
            }, 300);
        } else {
            details.open = true;
            setIsOpen(true);
        }
    };

    return (
        <div className="experiences">
            <details ref={detailsRef} className="experience">
                <summary onClick={toggleAnimation}>
                    <div className="summary-content">
                    <div>
                        <h3 className='title_exp'>{title}</h3>
                        <p className='date_exp'>{date}</p>
                        <p className='position_exp'>{position}</p>
                    </div>
                    <svg
                        className={`arrow ${isOpen ? "rotate" : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="26"
                        height="26"
                    >
                        <path
                        fill="currentColor"
                        d="M12 16.5l-8-8 1.4-1.4L12 13.7l6.6-6.6 1.4 1.4z"
                        />
                    </svg>
                    </div>
                </summary>
                <div className="experience-details">
                    <p className='description_exp'>
                        {description}
                    </p>

                    <h4 className='title_gains'>{t("title_exp")}</h4>
                    <ul className='list_gains'>
                        <li className='gain'>{gain}</li>
                        <li className='gain'>{gainTwo}</li>
                        <li className='gain'>{gainThree}</li>
                        <li className='gain'>{gainFour}</li>
                        <li className='gain'>{gainFive}</li>
                    </ul>
                </div>
            </details>
        </div>
  )
}

export default ExperiencesCards