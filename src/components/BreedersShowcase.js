// components/BreedersShowcase.tsx
import { CheckCircle2, Phone, Calendar, Crown } from 'lucide-react';
import { FaUserTie, FaWeight, FaRulerVertical, FaMedal } from 'react-icons/fa';
import { TbRulerMeasure } from 'react-icons/tb';

export default function BreedersShowcase() {
  const highlights = [
    "25+ years of hands-on breeding experience",
    "Specialized in Kota breed genetics and lineage",
    "Minute daily observation of growth, temperament, and individual traits.",
    "Sustainable and ethical breeding practices",
    "Personal consultation for every buyer",
  ];

  return (
    <section className="breeders-section">
      <div className="container">
        {/* Premium Breeders Showcase */}
        <div className="row g-5 align-items-center mb-5">
          {/* Left: Image with Overlay Card */}
          <div className="col-lg-6">
            <div className="position-relative">
              <div className="image-container">
                <img
                  src="/assets/images/hero/founders.png"
                  alt="Safdar & Zaid - Master Breeders"
                  className="img-fluid"
                />
              </div>

              {/* Floating Achievement Badge */}
              <div className="achievement-badge">
                <p className="achievement-number">25+ Years</p>
                <p className="achievement-text">Breeding Excellence</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="col-lg-6 content-section">
            <span className="sub-title">
              <FaUserTie size={30} className="me-2" />
              Meet Our Master Breeders
            </span>
            <h2>Safdar & Zaid</h2>
            <p className="subtitle">One Shared Vision. One Rare Breed.</p>

            <p className="description">
              Two visionaries who built a legacy of Kota excellence
              through pure experience and uncompromising dedication.
              Dedicated, instinctive, and relentlessly passionate, the
              founders personally oversee every pairing, every birth, and
              every health decision. Their hands-on approach shapes the
              quality that Shalimar Farms is known for.
            </p>

            {/* Key Highlights */}
            <div className="mb-4">
              {highlights.map((highlight, i) => (
                <div key={i} className="highlight-item">
                  <CheckCircle2 size={24} color="#0b3d2c" />
                  <span className="highlight-text">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="d-flex flex-column flex-sm-row gap-3">
              <a href="#cta" className="btn-primary-custom">
                <Calendar size={20} />
                Schedule Farm Visit
              </a>
              <a href="tel:+91-9860440277" className="btn-outline-custom">
                <Phone size={20} />
                Call Us Now
              </a>
            </div>
          </div>
        </div>

        {/* Sultan-E-Hind Spotlight - Single Goat */}
        <div className="goat-profile-section">
          <div className="goat-profile-header">
            <span className="sub-title">
              <Crown size={35} className="me-2" />
              Our Pride & Joy
            </span>
            <h3 className="display-4 fw-bold text-dark mb-3">Sultan-E-Hind</h3>
            <p className="text-muted fs-5">
              Meet Sultan-E-Hind, our crown jewel and the finest representation of the Kota breed. This magnificent goat embodies everything we stand for: superior genetics, impeccable health, and championship pedigree.
            </p>
          </div>

          <div className="goat-card-large">
            <div className="goat-image-container-large">
              <img
                src="/assets/images/hero/aboutv6.png"
                alt="Sultan-E-Hind - Champion Kota Breed Goat"
              />
            </div>
            <div className="goat-card-body-large">
              <h4 className="goat-name-large">Sultan-E-Hind</h4>
              <p className="goat-title-large">Premium Kota Breed Goat</p>

              <div className="goat-stats-large">
                <div className="stat-box">
                  <div className="stat-icon-small">
                    <FaWeight size={24} color="#0b3d2c" />
                  </div>
                  <div className="stat-box-label">Weight</div>
                  <div className="stat-box-value">145 kg</div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon-small">
                    <FaRulerVertical size={24} color="#0b3d2c" />
                  </div>
                  <div className="stat-box-label">Height</div>
                  <div className="stat-box-value">43 inches</div>
                </div>
                <div className="stat-box">
                  <div className="stat-icon-small">
                    <TbRulerMeasure size={24} color="#0b3d2c" />
                  </div>
                  <div className="stat-box-label">Ear Length</div>
                  <div className="stat-box-value">22 inches</div>
                </div>
              </div>

              <ul className="goat-features-large">
                <li>
                  <CheckCircle2 size={20} color="#0b3d2c" />
                  <span>Exceptional body length</span>
                </li>
                <li>
                  <CheckCircle2 size={20} color="#0b3d2c" />
                  <span>Proven superior genetics and lineage</span>
                </li>
                <li>
                  <CheckCircle2 size={20} color="#0b3d2c" />
                  <span>Rare horn structure</span>
                </li>
                <li>
                  <CheckCircle2 size={20} color="#0b3d2c" />
                  <span>Perfect breed conformation standards</span>
                </li>
                <li>
                  <CheckCircle2 size={20} color="#0b3d2c" />
                  <span>High-quality offspring producer</span>
                </li>
                <li>
                  <CheckCircle2 size={20} color="#0b3d2c" />
                  <span>Maintained pristine health record</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}