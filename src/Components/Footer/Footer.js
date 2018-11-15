import React from 'react';
import { FaGithub, FaInstagram, FaFacebookSquare, FaStackOverflow } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md';
import { IconContext } from "react-icons";
import '../../styles/css/Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <IconContext.Provider value={{ color: "#fff", className: "MdComputerFooter", size: "3rem" }}>
        <div>
            <MdComputer />
        </div>
      </IconContext.Provider>
      <p className="socialMediaText">Take a closer look at my life through Social Media</p>
      <div className="socialMediaIcons">
        <IconContext.Provider value={{ color: "#fff", className: "socialIcon", size: "1.4rem" }}>
            <div>
                <FaGithub />
            </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#fff", className: "socialIcon", size: "1.4rem" }}>
            <div>
                <FaStackOverflow />
            </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#fff", className: "socialIcon", size: "1.4rem" }}>
            <div>
                <FaInstagram />
            </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "#fff", className: "socialIcon", size: "1.4rem" }}>
            <div>
                <FaFacebookSquare /> 
            </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}
