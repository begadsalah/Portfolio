import React from "react";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/begad-salah-44875b1ab/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/begad.salah.5">
          <FaFacebookF />
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/begad.salah.eldin/">
          <BsInstagram />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
