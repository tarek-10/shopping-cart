import React from "react";
import { words } from "../../words";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="footer">{words.footerContent}</div>
    </>
  );
}

export default Footer;
