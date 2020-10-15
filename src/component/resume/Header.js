import React, { useEffect } from "react";
import profile from "../../img/img.jpg";
import { Icon, InlineIcon } from "@iconify/react";
import phoneVolume from "@iconify/icons-uil/phone-volume";
import envelopeAdd from "@iconify/icons-uil/envelope-add";
import facebook from "@iconify/icons-uil/facebook";
import twitter from "@iconify/icons-uil/twitter";
import githubIcon from "@iconify/icons-uil/github";
import commentIcon from "@iconify/icons-uil/comment";

function Header() {
  const texts = [
    "UI/UX Designer",
    "React Developer",
    "Django Backend Developer",
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  useEffect(() => {
    (function type() {
      if (count === texts.length) {
        count = 0;
      }

      currentText = texts[count];
      letter = currentText.slice(0, ++index);

      const skills = document.querySelector(".resume-skills");

      if (skills !== null) {
        skills.textContent = letter;
      }
      if (letter.length === currentText.length) {
        count++;
        index = 0;
      }

      setTimeout(type, 500);
    })();
  }, []);

  return (
    <section className="profile" id="profile__ripple">
      <div className="profile__left">
        <div className="avatar__block">
          <img src={profile} alt="ProfilePic" />
        </div>
        <div>
          <h2>Oluoch Maurice Brian</h2>
          <p className="resume-skills"></p>
        </div>
      </div>
      <div className="profile_right">
        <ul className="profile__contact">
          <li>
            <Icon icon={phoneVolume} />
            <strong>Phone :</strong> +254 795 77 2333
          </li>
          <li>
            <Icon icon={envelopeAdd} />
            <strong>Email :</strong> brianmauriceoluoch@gmail.com
          </li>
        </ul>
        <ul className="profile__socials">
          <li>
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-github" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Header;
