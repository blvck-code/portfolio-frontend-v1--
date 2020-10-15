import React from "react";
import cell from "@iconify/icons-uil/cell";
import Icon from "@iconify/react";
import smile from "@iconify/icons-uil/smile";
import trophy from "@iconify/icons-uil/trophy";

const Counter = ({ projects }) => {
  return (
    <section className="resume__counter">
      <div>
        <div>
          <Icon icon={cell} />
        </div>
        <div>
          <h3>
            <span className="counter" data-count={projects?.length}>
              {projects?.length}
            </span>
            +
          </h3>
          <h5>Completed projects</h5>
        </div>
      </div>
      <div>
        <div>
          <Icon icon={smile} />
        </div>
        <div>
          <h3>
            <span className="counter" data-count="3">
              3
            </span>
            +
          </h3>
          <h5>Happy Clients</h5>
        </div>
      </div>
      <div>
        <div>
          <Icon icon={trophy} />
        </div>
        <div>
          <h3>
            <span className="counter" data-count="15">
              15
            </span>
            +
          </h3>
          <h5>Awards received</h5>
        </div>
      </div>
    </section>
  );
};

export default Counter;
