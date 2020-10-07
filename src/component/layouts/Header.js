

//   const item1 = <p>Hi, my name is</p>
//   const item2 = <h1>Brian Maurice Oluoch.</h1>
//   const item3 = <h1 className="faded">I build things for the web.</h1>
//   const item4 = <p className="decs">
//   I'm a software engineer based in Nairobi, Kenya specializing in{" "}
//   <br />
//     building (and occasionally designing) exceptional, high-quality
//     <br /> websites and their backends.
//   </p>

//   const item5 = <button onClick={openModal} className="btn btn-primary">
//     Get In Touch
//   </button>

//   const item6 = <div className="wabbleIcon">
//   <a href="#about">
//     <i className="fa fa-angle-double-down"></i>
//   </a>
// </div>

//   const items = [item1, item2, item3, item4, item5, item6]

//   const clickOutside = (e) => {
//     if (
//       e.target === document.querySelector(".modal") ||
//       e.target === document.querySelector(".modal-content")
//       ) {
//         document.getElementById("modal").style.display = "none";
//       }
//     };

//     window.addEventListener("click", clickOutside) 
    
//     return (
//       <header id="header">
//           <div className="showcase">
//             {isMounted && items.map((item, i) => (
//               <div style={{ transitionDelay: `${i + 1}000ms` }}>{item}</div>
//             ))}
//           </div>
//       </header>
//     );
  
// }


import React, { Component } from 'react'

export class Header extends Component {

  openModal = () => {
    document.getElementById("modal").style.display = "block";
    document.getElementById("form").style.transform = "scale(1)";
  };

  clickOutside = (e) => {
    if (
      e.target === document.querySelector(".modal") ||
      e.target === document.querySelector(".modal-content")
      ) {
    document.getElementById("modal").style.display = "none";
    }
  };

    render() {
    window.addEventListener("click", this.clickOutside)
    return (
      <header id="header" data-aos="fade-down">
        <div className="showcase">
          <p data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">Hi, my name is</p>
          <h1 data-aos="fade-down" data-aos-delay="700" data-aos-duration="1000">Brian Maurice Oluoch.</h1>
          <h1 className="faded" data-aos="fade-down" data-aos-delay="900" data-aos-duration="1000">I build things for the web.</h1>
          <p className="decs" data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1000">
            I'm a developer based in Nairobi, Kenya specialized in{" "}
            <br />
            building (and occasionally designing) exceptional, high-quality
            <br /> websites and their backends.
          </p>

          <button onClick={this.openModal} className="btn btn-primary">
            Get In Touch
          </button>

          <div className="wabbleIcon">
            <a href="#about">
              <i className="fa fa-angle-double-down"></i>
            </a>
          </div>
        </div>
     </header>
    )
  }
}

export default Header

