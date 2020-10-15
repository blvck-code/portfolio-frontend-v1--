import React from "react";
import Icon from "@iconify/react";
import phoneVolume from "@iconify/icons-uil/phone-volume";
import envelope from "@iconify/icons-uil/envelope";
import mapMarker from "@iconify/icons-uil/map-marker";

const Contact = () => {
  return (
    <section className="resume__contact">
      <h1 className="section__heading">Contact Me</h1>
      <div className="contact__wrapper">
        <div className="contact__left">
          <div>
            <div>
              <Icon icon={phoneVolume} />
            </div>
            <div>
              <h4>Free To Call Me:</h4>
              <span>(+254) 795-772-333</span>
            </div>
          </div>

          <div>
            <div>
              <Icon icon={envelope} />
            </div>
            <div>
              <h4>Mail Me:</h4>
              <span>brianmauriceoluoch@gmail.com</span>
            </div>
          </div>

          <div>
            <div>
              <Icon icon={mapMarker} />
            </div>
            <div>
              <h4>Find Me:</h4>
              <span>Nairobi, Kenya</span>
            </div>
          </div>
        </div>
        <div className="contact__right">
          <form>
            <div className="form__group">
              <div>
                <label htmlFor="name">Name</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="name">Email</label>
                <input type="email" />
              </div>
            </div>
            <div className="form__group textarea__wrapper">
              <div>
                <label htmlFor="message">Message</label>
                <textarea cols="30" rows="4" />
              </div>
            </div>
            <button type="submit">Submit Now</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
