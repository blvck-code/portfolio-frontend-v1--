import React, { useEffect } from "react";
import Icon from "@iconify/react";
import feedback from "@iconify/icons-uil/feedback";

const Work = ({ projects }) => {
  useEffect(() => {
    let links = document.querySelectorAll(".tabs a");
    let items = document.querySelectorAll(".portfolio__item");

    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        links.forEach((link) => {
          link.classList.remove("tab__active");
        });

        items.forEach((item) => {
          item.style.display = "none";
        });

        items.forEach((item) => {
          if (item.classList.contains(e.target.id)) {
            item.style.display = "block";
          } else if (e.target.id === "*") {
            item.style.display = "block";
          }
        });

        e.target.classList.add("tab__active");
      });
    });
  }, []);

  const grabImg = (id) => {
    console.log(id);
  };

  return (
    <section className="resume__work">
      <h1 className="section__heading">My Works & Reviews</h1>
      <div className="work__wrapper">
        <div className="reviews">
          <div className="icon__wrapper">
            <Icon icon={feedback} />
          </div>
          <div className="slider__wrapper">
            <div className="slide">
              <p>
                I enjoy creating things that live on the internet, websites,
                applications or anything in between. My main goal is to always
                build products that provide pixel-perfect, perfomant
                experiences.
              </p>
              <div className="review__img">
                {/* <img src="" alt="User" /> */}
              </div>
              <h2>- Maurice Oluoch</h2>
              <h6>CEO Facebook</h6>
            </div>
          </div>
        </div>
        <div className="portfolio">
          <div className="tabs">
            <ul>
              <li>
                <a className="tab__active" href="" id="*">
                  All
                </a>
              </li>
              <li>
                <a href="" id="design">
                  UX/UI
                </a>
              </li>
              <li>
                <a href="" id="frontend">
                  Frontend
                </a>
              </li>
              <li>
                <a href="" id="fullstack">
                  Fullstack
                </a>
              </li>
              <li>
                <a href="" id="backend">
                  Backend
                </a>
              </li>
            </ul>
          </div>

          <div className="portfolio__wrapper">
            {projects.map((item) =>
              item.image ? (
                <div
                  key={item.id}
                  className={`portfolio__item  ${item.category.toLowerCase()}`}
                  id="design-content">
                  <img onClick={() => grabImg(item.id)} src={item.image} />
                </div>
              ) : (
                ""
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
