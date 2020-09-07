import React from 'react'

// Images
import TwitterIcon from '../assets/images/twitter.png'
import LinkedinIcon from '../assets/images/linkedin.png'
import GithubIcon from '../assets/images/github.png'
import CodepenIcon from '../assets/images/codepen.png'

function Footer() {
  return(
    <footer className="footer">
      <div className="footer__wrapper">
        <p className="footer__text">Development: Cynthia Costa</p>
        <div className="footer__social">
          <a href="https://twitter.com/cycosta" className="footer__link" target="_blank" rel="noopener noreferrer">
            <img src={TwitterIcon} alt="Twitter icon" className="footer__icon" />
          </a>
          <a href="https://www.linkedin.com/in/cycosta" className="footer__link" target="_blank" rel="noopener noreferrer">
            <img src={LinkedinIcon} alt="Linkedin icon" className="footer__icon" />
          </a>
          <a href="https://github.com/cycosta" className="footer__link" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="Github icon" className="footer__icon" />
          </a>
          <a href="https://codepen.io/cycosta" className="footer__link" target="_blank" rel="noopener noreferrer">
            <img src={CodepenIcon} alt="Codepen icon" className="footer__icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
