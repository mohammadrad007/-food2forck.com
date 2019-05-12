import React from "react";
const Footer = () => (
  <div className="card text-center card__footer text-slanted">
    <div className="card-header card__footer__made contact">
      <h5>Contact us</h5>
    </div>
    <div className="card-body card__footer__body">
      <h5 className="card-title">Recipe Search Food Project</h5>
      <p className="card-text">
        useing React, ReactDOM, ReactRouterDom, Bootstrap, FontAwsome and ajax
        Request => https://www.food2fork.com
      </p>
      <a
        rel="noopener noreferrer"
        href="https://www.instagram.com/mohammadrad007/"
        target="_blank"
        title="Instagram"
      >
        <i className="fa fa-instagram"> Instagram</i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://web.telegram.org/@reasecher_of_islam"
        target="_blank"
        title="Telegram"
      >
        <i className="fa fa-telegram"> Telegram</i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://twitter.com/reasercher_o_i"
        target="_blank"
        title="Twitter"
      >
        <i className="fa fa-twitter"> Twitter</i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://github.com/mohammadrad007"
        target="_blank"
        title="GitHub"
      >
        <i className="fa fa-github"> GitHub</i>
      </a>
      <a
        rel="noopener noreferrer"
        href="https://gmail.com"
        target="_blank"
        title="email"
      >
        <i className="fa fa-at"> saberzx313@gmail.com</i>
      </a>
    </div>
    <div className="card-footer text-muted card__footer__made">
      Made with <i className="fa fa-heart card__footer__body mr-2" />
      And
      <i className="fa fa-coffee ml-2 coffe" />
    </div>
  </div>
);

export default Footer;
