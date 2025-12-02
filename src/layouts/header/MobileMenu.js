import Link from "next/link";
import { Fragment, useState } from "react";

const MobileMenu = ({ handleShow, logo, extraClass, barIcon }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Fragment>
      <div
        className={`header-navigation d-xl-none d-block breakpoint-on ${extraClass}`}
      >
        <div
          className={`nav-overlay ${toggle ? "active" : ""}`}
          onClick={() => setToggle(false)}
        />
        <div className="container-fluid">
          <div className="primary-menu">
            {/*====== Site Branding ======*/}
            <div className="site-branding">
              <Link legacyBehavior href="/">
                <a className="brand-logo">
                  <img
                    src={logo ? logo : "assets/images/logo/logo-black.png"}
                    alt="Shalimar Farms Logo"
                  />
                </a>
              </Link>
            </div>
            {/*====== Nav Menu ======*/}
            <div className={`nav-menu ${toggle ? "menu-on" : ""}`}>
              {/*====== Site Branding ======*/}
              <div className="mobile-logo mb-30 d-block d-xl-none">
                <Link legacyBehavior href="/">
                  <a className="brand-logo">
                    <img
                      src={"assets/images/logo/logo-black.png"}
                      alt="Shalimar Farms Logo"
                    />
                  </a>
                </Link>
              </div>
              
              {/*====== main Menu ======*/}
              <nav className="main-menu">
                <ul>
                  <li className="menu-item">
                    <Link legacyBehavior href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="menu-item">
                    <a href="/#about">About Us</a>
                  </li>
                  <li className="menu-item">
                    <a href="/#sultan">Sultan-E-Hind</a>
                  </li>
                  <li className="menu-item">
                    <a href="/#kota-breed">Kota Breed</a>
                  </li>
                  <li className="menu-item">
                    <a href="/#contact">Contact</a>
                  </li>
                </ul>
              </nav>

              {/*====== Social Links ======*/}
              <div className="mobile-social-links mt-40 mb-30">
                <h6 className="mb-3">Follow Us</h6>
                <div className="d-flex gap-3">
                  {/* <a 
                    href="https://www.facebook.com/profile.php?id=61571383490221" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a> */}
                  <a 
                    href="https://www.instagram.com/shalimarfarms/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a 
                    href="https://www.youtube.com/@shalimarfarms" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="YouTube"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a 
                    href="https://wa.me/919860440277" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-icon"
                    aria-label="WhatsApp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </div>
              </div>

              {/*====== Contact Info ======*/}
              <div className="mobile-contact-info">
                <div className="mb-2">
                  <a href="tel:+919860440277" className="d-flex align-items-center">
                    <i className="far fa-phone-plus mr-2"></i>
                    +91 98604 40277 (Safdar)
                  </a>
                </div>
                <div className="mb-2">
                  <a href="tel:+919970838221" className="d-flex align-items-center">
                    <i className="far fa-phone-plus mr-2"></i>
                    +91 99708 38221 (Zaid)
                  </a>
                </div>
                <div className="mb-2">
                  <a href="mailto:info@shalimarfarms.com" className="d-flex align-items-center">
                    <i className="far fa-envelope mr-2"></i>
                    info@shalimarfarms.com
                  </a>
                </div>
              </div>
            </div>

            {/*====== Nav Right Item ======*/}
            <div className="nav-right-item d-flex align-items-center">
              <div
                className="bar-button"
                data-toggle="modal"
                data-target="#sidebar-modal"
                onClick={handleShow}
              >
                <img
                  src={barIcon ? barIcon : "assets/images/bar.png"}
                  alt="Menu"
                />
              </div>
              <div
                className="navbar-toggler"
                onClick={() => setToggle(!toggle)}
              >
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default MobileMenu;