import Link from "next/link";
import { GiPhone } from "react-icons/gi";
import { TbMapPin } from "react-icons/tb";
import { IoMail } from "react-icons/io5";

const Default = () => {
  return (
    <footer className="footer-area text-white main-bg">
      <div className="container">
        {/*====== Footer Widget ======*/}
        <div className="footer-widget-area pt-80 pb-40">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-about-widget mb-40 pr-lg-70 wow fadeInUp">
                <div className="widget-content">
                  <div className="footer-logo mb-25">
                    <Link legacyBehavior href="/">
                      <a>
                        <img
                          src="assets/images/logo/logo-light.png"
                          alt="Shalimar Farms Logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <p>
                    Home of premium Kota goats. Breeding excellence for generations. 
                    Preserving the legacy of pure Kota bloodlines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget contact-info-widget mb-40 wow fadeInDown">
                <h4 className="widget-title">Get In Touch</h4>
                <div className="widget-content">
                  <ul className="info-list">
                    <li>
                      <a href="https://maps.google.com/?q=Pune,Maharashtra,India" target="_blank" rel="noopener noreferrer">
                        <TbMapPin size={16} className="inline-block mr-2" /> 
                        Pune, Maharashtra, India
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@shalimarfarms.com">
                        <IoMail size={16} className="inline-block mr-2" /> 
                        info@shalimarfarms.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919860440277">
                        <GiPhone size={16} className="inline-block mr-2" /> 
                        +91 98604 40277 (Safdar)
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919970838221">
                        <GiPhone size={16} className="inline-block mr-2" /> 
                        +91 99708 38221 (Zaid)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget footer-nav-widget mb-40 wow fadeInUp">
                <h4 className="widget-title">Quick Links</h4>
                <div className="widget-content">
                  <ul className="footer-nav">
                    <li>
                      <a href="/#about">About Us</a>
                    </li>
                    <li>
                      <a href="/#sultan">Sultan-E-Hind</a>
                    </li>
                    <li>
                      <a href="/#kota-breed">Kota Breed</a>
                    </li>
                    <li>
                      <a href="/#contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              {/*====== Footer Widget ======*/}
              <div className="footer-widget contact-info-widget mb-40 wow fadeInDown">
                <h4 className="widget-title">Connect With Us</h4>
                <div className="widget-content">
                  <p className="white-clr mb-3">
                    Follow us for daily updates, breeding insights, and behind-the-scenes moments
                  </p>
                  <div 
                    className="social-wrapper social-empact d-flex align-items-start" 
                    style={{justifyContent:"space-between", gap: "0.5rem"}}
                  >
                    {/* <a 
                      href="https://www.facebook.com/profile.php?id=61571383490221" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="white-clr" 
                      aria-label="Facebook"
                    >
                      <i className="white-clr fab fa-facebook-f"></i>
                    </a> */}
                    <a 
                      href="https://www.instagram.com/shalimarfarms/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="white-clr" 
                      aria-label="Instagram"
                    >
                      <i className="white-clr fab fa-instagram"></i>
                    </a>
                    <a 
                      href="https://www.youtube.com/@shalimarfarms" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="white-clr" 
                      aria-label="YouTube"
                    >
                      <i className="white-clr fab fa-youtube"></i>
                    </a>
                    <a 
                      href="https://wa.me/919860440277" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="white-clr" 
                      aria-label="WhatsApp"
                    >
                      <i className="white-clr fab fa-whatsapp"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*=== Copyright Area ===*/}
        <div className="copyright-area">
          <div className="row">
            <div className="col-lg-6">
              {/*====== Copyright Text ======*/}
              <div className="copyright-text">
                <p>Copyright © 2025 Shalimar Farms. All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-lg-6">
              {/*====== Copyright Nav ======*/}
              <div className="copyright-nav float-lg-right">
                <p className="wow fadeInRight color-2" data-wow-delay=".3s">
                  Developed & Designed by{" "}
                  <a 
                    href="https://visionaryservices.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visionary Services
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Default;