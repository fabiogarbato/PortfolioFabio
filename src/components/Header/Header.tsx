import { Container } from './styles'
import { BrowserRouter as Router } from 'react-router-dom'
import { NavHashLink, HashLink } from 'react-router-hash-link'
import { useState, useContext } from 'react'
import Resume from '../../assets/Vinayak_Kumar_Singh_Resume.pdf'
import { LanguageContext } from '../../LanguageContext';

export function Header() {
  const [isActive, setActive] = useState(false)

  function toggleTheme() {
    let html = document.getElementsByTagName('html')[0]
    html.classList.toggle('light')
  }

  function closeMenu() {
    setActive(false)
  }

  const { language, setLanguage } = useContext(LanguageContext)

  return (
    <Container className="header-fixed">
      <Router>
        <div className="left-section">
          <HashLink smooth to="#home" className="logo">
            <span>{"<Fábio "}</span>
            <span>{" Garbato/>"}</span>
          </HashLink>
          <div className="controls">
            <input
              onChange={toggleTheme}
              className="container_toggle"
              type="checkbox"
              id="switch"
              name="mode"
            />
            <button 
              className="language-button" 
              onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
            >
              {language.toUpperCase()}
            </button>
          </div>
        </div>

        <nav className={isActive ? 'active' : ''}>
          <NavHashLink smooth to="#home" onClick={closeMenu}>
            {language === 'pt' ? 'Início' : 'Home'}
          </NavHashLink>
          <NavHashLink smooth to="#about" onClick={closeMenu}>
            {language === 'pt' ? 'Sobre mim' : 'About me'}
          </NavHashLink>
          <NavHashLink smooth to="#project" onClick={closeMenu}>
            {language === 'pt' ? 'Projetos' : 'Projects'}
          </NavHashLink>
          <NavHashLink smooth to="#contact" onClick={closeMenu}>
            {language === 'pt' ? 'Contato' : 'Contact'}
          </NavHashLink>
          <a href={Resume} download className="button">
            {language === 'pt' ? 'Currículo' : 'Resume'}
          </a>
        </nav>
        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Fechar menu' : 'Abrir menu'}
          className={isActive ? 'menu active' : 'menu'}
          onClick={() => {
            setActive(!isActive)
          }}
        ></div>
      </Router>
    </Container>
  )
}
