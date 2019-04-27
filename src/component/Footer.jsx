import React from "react";
const Footer = () => (
  <div className="card text-center card__footer">
    <div className="card-header card__footer__made contact">
      <h5>Contact us</h5>
    </div>
    <div className="card-body card__footer__body">
      <h5 className="card-title">Reipe Search Food Project</h5>
      <p className="card-text">
        useing React, ReactDOM, ReactRouterDom, Bootstrap, FontAwsome and ajax
        Request => https://www.food2fork.com
      </p>
      <a
        href="https://www.instagram.com/mohammadrad007/"
        target="_blank"
        title="Instagram"
      >
        <i className="fa fa-instagram"> Instagram</i>
      </a>
      <a href="https://web.telegram.org/#/im" target="_blank" title="Telegram">
        <i className="fa fa-telegram"> Telegram</i>
      </a>
      <a
        href="https://twitter.com/reasercher_o_i"
        target="_blank"
        title="Twitter"
      >
        <i className="fa fa-twitter"> Twitter</i>
      </a>
      <a href="" target="_blank" title="email">
        <i className="fa fa-at"> saberzx313@gmail.com</i>
      </a>
    </div>
    <div className="card-footer text-muted card__footer__made">
      Made with <i className="fa fa-heart"> And .</i>
      <i className="fa fa-coffee"> . </i>
    </div>
  </div>
);

export default Footer;
