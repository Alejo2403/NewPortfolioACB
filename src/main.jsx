import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'

import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import Experiences from './components/Experiences.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
    <Experiences />
  </StrictMode>,
)
