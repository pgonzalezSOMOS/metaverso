import React from "react";

function Footer() {
   
  return (
    <footer className="footer__container">
        <h2 className="footer__container--title">CONTACTO</h2>
        <div className="footer__container__contact">
            <p>Decentraland [<span className="footer__container__contact--purple">53, 54</span>]</p>
            <p> +676 09 68 73</p>
            <p className="footer__container__contact--purple">somos@metaverso.com</p>
        </div>
        <div className="footer__container__terms">
            <p>políticas</p>
            <p>&#8226;</p>
            <p className="footer__container__terms--blue">cookies</p>
        </div>
    </footer>

)}
export default Footer;