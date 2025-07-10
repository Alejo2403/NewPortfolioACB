import { useTranslation } from "react-i18next";

import SocialIcons from "./components/SocialIcons";

import "./i18n/config";
import "./styles/App.css";

function App() {

  const { t } = useTranslation();

  return (
    <>  
      <div id="about" className="container_main container">

        <div className="container_left">
          <h1
            dangerouslySetInnerHTML={{ 
              __html: t("welcome") 
            }}
          />
                    <p 
            dangerouslySetInnerHTML={{ 
              __html: t("about_me") 
            }} 
          />
        </div>

        <div className="container_right">
          <img src="/img/avatar.png" alt="avatar" className="avatar"/>

          <div className="buttons">
            <SocialIcons/>

            <a
              href="/HVportfolioACB.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">
                <p className="text">
                  {t("button_cv")}
                </p>
                <div className="svg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="bi bi-download" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;