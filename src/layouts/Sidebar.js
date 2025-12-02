import Link from "next/link";
import { Modal } from "react-bootstrap";

const Sidebar = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName="sidebar-panel-wrapper"
      centered={false}
    >
      <button className="close" type="button" onClick={handleClose}>
        <i className="far fa-times" />
      </button>

      <div className="sidebar-wrapper">
        <div className="sidebar-information-area">
          <div className="row no-gutters">
            <div className="col-lg-4 sidebar-widget">
              <div className="sidebar-info-widget">
                {/* FIX: Removed the <a> tag and moved className to Link */}
                <Link href="/" className="footer-logo">
                  <img
                    src="/assets/images/logo/logo-light.png"
                    alt="Shalimar Farms Logo"
                  />
                </Link>
                
                <p>
                  Preserving the legacy of pure Kota breed goats through
                  generations of dedication, expertise, and passion. Shalimar
                  Farms is home to India's finest breeding stock.
                </p>
                <div className="social-item">
                  <h6>Follow Us</h6>
                  <ul className="social-link">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=61571383490221"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/shalimarfarms/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/@shalimarfarms"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                      >
                        <i className="fab fa-youtube" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/919860440277"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                      >
                        <i className="fab fa-whatsapp" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-widget">
              <div className="sidebar-info-widget">
                <h4 className="title">Get In Touch</h4>
                <div className="contact-info-item-two">
                  <h6 className="title">
                    <i className="far fa-map-marker-alt" />
                    Location
                  </h6>
                  <p>Pune, Maharashtra, India</p>
                </div>
                <div className="contact-info-item-two">
                  <h6 className="title">
                    <i className="far fa-envelope-open" />
                    Email Us
                  </h6>
                  <p>
                    <a href="mailto:info@shalimarfarms.com">
                      info@shalimarfarms.com
                    </a>
                  </p>
                </div>
                <div className="contact-info-item-two">
                  <h6 className="title">
                    <i className="far fa-phone-plus" />
                    Safdar
                  </h6>
                  <p>
                    <a href="tel:+919860440277">+91 98604 40277</a>
                  </p>
                </div>
                <div className="contact-info-item-two">
                  <h6 className="title">
                    <i className="far fa-phone-plus" />
                    Zaid
                  </h6>
                  <p>
                    <a href="tel:+919970838221">+91 99708 38221</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 sidebar-widget">
              <div className="sidebar-info-widget">
                <h4 className="title">Newsletter</h4>
                <p className="mb-3">
                  Subscribe to receive updates on new arrivals, breeding tips,
                  and exclusive offers from Shalimar Farms.
                </p>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form_group">
                    <input
                      type="email"
                      className="form_control"
                      placeholder="Your Email Address"
                      required
                    />
                    <button className="main-btn secondary-btn">
                      Subscribe Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-gallery pt-80">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-4">
              <div className="single-gallery-item">
                <div className="gallery-img">
                  <img
                    src="/assets/images/farm/SON00235.JPG"
                    alt="Kota Goat - Shalimar Farms"
                  />
                  <div className="hover-overlay">
                    <a
                      href="/assets/images/farm/SON00235.JPG"
                      className="img-popup icon-btn"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <div className="single-gallery-item">
                <div className="gallery-img">
                  <img
                    src="/assets/images/farm/SON00217.JPG"
                    alt="Kota Goat - Shalimar Farms"
                  />
                  <div className="hover-overlay">
                    <a
                      href="/assets/images/farm/SON00217.JPG"
                      className="img-popup icon-btn"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <div className="single-gallery-item">
                <div className="gallery-img">
                  <img
                    src="/assets/images/farm/SON00269.JPG"
                    alt="Kota Goat - Shalimar Farms"
                  />
                  <div className="hover-overlay">
                    <a
                      href="/assets/images/farm/SON00269.JPG"
                      className="img-popup icon-btn"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <div className="single-gallery-item">
                <div className="gallery-img">
                  <img
                    src="/assets/images/farm/SON00233.JPG"
                    alt="Kota Goat - Shalimar Farms"
                  />
                  <div className="hover-overlay">
                    <a
                      href="/assets/images/farm/SON00233.JPG"
                      className="img-popup icon-btn"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <div className="single-gallery-item">
                <div className="gallery-img">
                  <img
                    src="/assets/images/hero/aboutv6.png"
                    alt="Sultan-E-Hind - Champion Kota Goat"
                  />
                  <div className="hover-overlay">
                    <a
                      href="/assets/images/hero/aboutv6.png"
                      className="img-popup icon-btn"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-4">
              <div className="single-gallery-item">
                <div className="gallery-img">
                  <img
                    src="/assets/images/hero/founders.png"
                    alt="Safdar & Zaid - Master Breeders"
                  />
                  <div className="hover-overlay">
                    <a
                      href="/assets/images/hero/founders.png"
                      className="img-popup icon-btn"
                    >
                      <i className="far fa-plus" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default Sidebar;