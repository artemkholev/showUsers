import React from "react";
import { Link } from 'react-router-dom';
import style from "./Footer.module.scss"

const Footer = ({year}: any) => {
  return (
    <footer className={style.footer}>
      <div className={style.conteiner}>
        <div className={style.wrapperFooter}>
          <div className={style.copyright}>
            <p>© TEST, {year}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;