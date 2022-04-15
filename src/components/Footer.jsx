import React from "react";

function Footer() {
  const getfullYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {getfullYear} </p>
    </footer>
  );
}

export default Footer;
