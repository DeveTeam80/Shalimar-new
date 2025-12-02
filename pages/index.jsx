import Counter from "@/src/components/Counter";
import Layout from "@/src/layouts/Layout";
import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";
import Slider from "react-slick";
import {
  TbCertificate,
  TbReportAnalytics,
  TbShieldCheck,
  TbUserHeart,
} from "react-icons/tb";
import { TbRulerMeasure, TbRulerMeasure2 } from "react-icons/tb";
import { IoDiamond } from "react-icons/io5";
import { PiTargetBold } from "react-icons/pi";
import { PiFarm } from "react-icons/pi";
import { Crown } from "lucide-react";
import { Instagram, Play } from 'lucide-react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import VisionSection from "@/src/components/VisionSection";
import BreedersShowcase from "@/src/components/BreedersShowcase";
import ContactModal from "@/src/components/ContactModal";
import { useState } from "react";



const Index2 = () => {
  const [showContactModal, setShowContactModal] = useState(false);

  const handleShowContact = () => {
    console.log("Button clicked!");
    setShowContactModal(true);
    console.log("Modal state set to true");
  };

  const handleCloseContact = () => {
    console.log("Closing modal");
    setShowContactModal(false);
  };

  console.log("Current modal state:", showContactModal);

  return (
    <Layout>
      <ContactModal show={showContactModal} handleClose={handleCloseContact} />

      {/*====== Start Banner Section ======*/}
      <section className="banner-section">
        {/*====== Hero Wrapper One ======*/}
        <div className="hero-wrapper-two">
          {/*====== Hero Slider ======*/}
          <Slider {...sliderProps.heroOne} className="hero-slider-one">
            {/*====== Single Slider ======*/}
            <div className="single-slider">
              <div
                className="image-layer bg_cover"
                style={{
                  backgroundImage: "url(/assets/images/hero/hero.jpeg)",
                }}
              />
              <div className="col-lg-8" style={{ zIndex: 999 }}>
                <div className="hero-content">
                  <h2
                    className="text-white mb-10"
                    data-animation="fadeInDown"
                    data-delay=".5s"
                  >
                    We Don't Just Raise Goats. <br /> We Raise G.O.A.T.s.
                  </h2>
                  <span
                    className="sub-title"
                    data-animation="fadeInUp"
                    data-delay=".34"
                  >
                    Home of the legendary Sultan-e-Hind
                  </span>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Banner Section ======*/}
      {/*====== Start CTA Section  ======*/}

      {/*====== End CTA Section  ======*/}
      {/*====== Start Features Section  ======*/}
      <VisionSection />
      <BreedersShowcase />
      {/*====== End Features Section  ======*/}
      {/*====== Start Choose Section  ======*/}
      <section
        className="choose-bg-section bg_cover p-r z-1 pt-100 pb-100"
        style={{ backgroundImage: "url(assets/images/bg/choose-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              {/*====== Section Title  ======*/}
              <div className="section-title text-white text-center mb-50 wow fadeInDown">
                <span className="sub-title">
                  <PiFarm size={30} className="me-2" />
                  Redefining Goat Farming in India:
                </span>
                <h2>Where Heritage Meets Excellence in Goat Breeding.</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              {/*====== Choose Wrapper  ======*/}
              <div className="choose-wrapper wow fadeInUp">
                <div className="row">
                  <div className="col-lg-7">
                    {/*====== Choose Tab Pane  ======*/}
                    <Tab.Container defaultActiveKey={"tab1"}>
                      <div className="choose-tab-pane">
                        {/*====== Tab Content  ======*/}
                        <Tab.Content className="tab-content">
                          {/* TAB 1 - OUR LEGACY */}
                          <Tab.Pane className="tab-pane" eventKey="tab1">
                            <div className="choose-content-box">
                              <p>
                                Shalimar Farms stands at the intersection of
                                heritage, expertise, and scientific care. What
                                began as childhood fascination has evolved into
                                one of India's most respected Kota goat breeding
                                ventures.
                              </p>
                              <p>
                                With over two decades of experience, we preserve
                                the true Kota bloodline of Rajasthan through
                                selective breeding, ethical practices, and deep
                                practical knowledge. Our farm isn't built on
                                mass production, but on exclusivity, purity, and
                                sustainable breeding excellence. Every goat
                                raised here reflects our commitment to
                                structure, temperament, and health, the
                                qualities that define a true Kota.
                              </p>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </div>
                    </Tab.Container>
                  </div>

                  <div className="col-lg-5">
                    {/*====== Choose Image Box  ======*/}
                    <div className="choose-image-box">
                      <img
                        src="/assets/images/farm/SON00324.JPG"
                        alt="About Shalimar Farms"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*====== End Choose Section  ======*/}
      {/*====== Start Working Process Section ======*/}
      <section className="features-section pt-95">
        <div className="container">
          <div className="row align-items-xl-center">
            <div className="col-lg-6">
              <div className="section-title mb-55 wow fadeInLeft">
                <span className="sub-title">
                  <Crown size={24} className="me-2" />
                  Understanding the Kota Breed
                </span>
                <h2>The Kota Breed, Why It's Rare?</h2>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="features-content-box mb-55 wow fadeInRight">
                <p>
                  At Shalimar Farms, <br />
                  We honor this rarity with purposeful, selective breeding,
                  ensuring every generation reflects the true Kota spirit,
                  balanced, beautiful, and unmistakably pure.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="thumb">
                  <img src="/assets/images/farm/SON00235.JPG" alt="Image" />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-landscape-1" />
                  </div>
                  <h5 className="title">
                    A Heritage Breed with Timeless Identity
                  </h5>
                  <p>
                    Kota goats carry generations of distinct structure,
                    markings, and temperament. Their refined presence and deep
                    cultural roots make them a true symbol of Rajasthan's
                    pastoral heritage.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="thumb">
                  <img src="/assets/images/farm/SON00217.JPG" alt="Image" />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-watering-can" />
                  </div>
                  <h5 className="title">
                    Signature Long Ears: The Pure Kota Mark
                  </h5>
                  <p>
                    Pure-line Kota goats are known for their natural, drooping
                    long ears measuring 22–23 inches. Our prime male proudly
                    carries a 28-inch span, placing him among India's finest
                    Kota specimens.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="thumb">
                  <img src="/assets/images/farm/SON00269.JPG" alt="Image" />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-lawnmower" />
                  </div>
                  <h5 className="title">
                    A Breed Defined by Intentional Breeding
                  </h5>
                  <p>
                    True Kota traits cannot be mass-produced. They require
                    selective pairing, controlled genetics, careful evaluation
                    of kids, and consistent breeding over generations,making the
                    breed rare and exclusive.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <div
                className="features-thumb-item-two mb-40 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="thumb">
                  <img src="/assets/images/farm/SON00233.JPG" alt="Image" />
                </div>
                <div className="text">
                  <div className="icon">
                    <i className="flaticon-spider-plant" />
                  </div>
                  <h5 className="title">
                    A Collectible Breed Cherished by Enthusiasts
                  </h5>
                  <p>
                    Kota goats are prized for their long ears, balanced frame,
                    and photogenic presence. Each one has a unique look and
                    personality, making them highly desirable to serious
                    breeders and collectors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Working Process Section ======*/}
      {/*====== Start Gallery Section ======*/}
      <section
        className="gallery-section-minus p-r z-2 choose-bg-section bg_cover p-r z-1 pt-100 pb-100 text-white"
        style={{ backgroundImage: "url(assets/images/bg/choose-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              {/*====== Section Title ======*/}
              <div className="section-title mb-50 pr-lg-70 wow fadeInLeft">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Every legend has a lineage.
                </span>
                <h2>The Line That Built Our Legacy</h2>
              </div>
            </div>
            <div className="col-lg-12">
              {/*====== Project Content Box ======*/}
              <div className="project-content-box mb-50 wow fadeInRight text-center">
                <p className="mb-35">
                  Ours begins with <strong>Legend</strong>, perfected through{" "}
                  <strong>Sultan-e-Hind</strong>, and carried forward by the
                  next generation:{" "}
                  <strong>
                    {" "}
                    Sher-e-Hind, Gazi, Chota Sultan, Sikander, Kamori, Aryan,
                    and Lion
                  </strong>
                  . Every bloodline we nurture is documented, traceable, and
                  selectively preserved. From sire to offspring, the lineage
                  carries unmistakable Shalimar traits: structure, balance,
                  length, and presence. Each generation reflects the signature
                  stamp of Shalimar Farms.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Slider
          {...sliderProps.projectsSliderOne}
          className="projects-slider-one wow fadeInDown"
        >
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="/assets/images/farm/SON00151.JPG" alt="Gallery Image" />
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="/assets/images/farm/SON00158.JPG" alt="Gallery Image" />
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="/assets/images/farm/SON00221.JPG" alt="Gallery Image" />
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="/assets/images/farm/SON00226.JPG" alt="Gallery Image" />
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="/assets/images/farm/SON00188.JPG" alt="Gallery Image" />
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="/assets/images/farm/SON00198.JPG" alt="Gallery Image" />
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="/assets/images/farm/SON00201.JPG" alt="Gallery Image" />
            </div>
          </div>
          {/*====== Single Gallery Item ======*/}
          <div className="single-project-item">
            <div className="project-img">
              <img src="/assets/images/farm/SON00217.JPG" alt="Gallery Image" />
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Gallery Section ======*/}
      {/*====== Start Services Section ======*/}
      <section className="service-section pt-100 pb-20">
        <div className="container">
          {/*====== Section Title ======*/}
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-title text-center mb-100 wow fadeInDown">
                <span className="sub-title">
                  <i className="flaticon-plant" />
                  Why Trust Shalimar Farms
                </span>
                <h2>What Makes Us Truly Different</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            {/*====== Card 1: Pure Lineage Breeding ======*/}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".2s"
              >
                <div className="icon">
                  <TbCertificate size={42} color="#fff" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <a>Pure Lineage Breeding</a>
                  </h4>
                  <p>
                    Selective pairings, documented parentage, and generational
                    consistency ensure true Kota type.
                  </p>
                </div>
              </div>
            </div>

            {/*====== Card 2: Scientific Feeding ======*/}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".25s"
              >
                <div className="icon">
                  <TbReportAnalytics size={42} color="#fff" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <a>Scientific Feeding & Health Excellence</a>
                  </h4>
                  <p>
                    Precise feeding schedules, seasonal rationing, and advanced
                    health insight shaped by decades of experience.
                  </p>
                </div>
              </div>
            </div>

            {/*====== Card 3: Hygiene & Isolation ======*/}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInDown"
                data-wow-delay=".3s"
              >
                <div className="icon">
                  <TbShieldCheck size={42} color="#fff" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <a>Hygiene, Isolation & Climate Care</a>
                  </h4>
                  <p>
                    Clean environments, isolated recovery units, and
                    weather-aware management protect long ears and overall herd
                    health.
                  </p>
                </div>
              </div>
            </div>

            {/*====== Card 4: Personalized Care ======*/}
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div
                className="single-service-item-two mb-80 wow fadeInUp"
                data-wow-delay=".35s"
              >
                <div className="icon">
                  <TbUserHeart size={42} color="#fff" />
                </div>
                <div className="text">
                  <h4 className="title">
                    <a>Personalized, Hands-On Care</a>
                  </h4>
                  <p>
                    Every goat is individually observed—appetite, behavior,
                    temperament, growth—personally overseen by the founders
                    daily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*====== Instagram and Youtube Section ======*/}
      <section className="project-section pt-95 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">
                  <FaInstagram size={24} className="me-2" />
                  Follow Our Journey
                </span>
                <h2>See The Legacy in Motion</h2>
                <p className="mt-3">
                  Follow us on Instagram and YouTube for daily updates, behind-the-scenes moments, and the latest from Shalimar Farms.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          {/*====== Instagram Slider ======*/}
          <Slider
            {...sliderProps.projectsSliderFour}
            className="instagram-slider wow fadeInUp"
            data-wow-delay=".2s"
          >
            {/*====== Instagram Post 1 ======*/}
            <div className="single-instagram-item">
              <div className="instagram-img-wrapper">
                <img
                  src="/assets/images/instagram/9d478dc3-c75d-4030-b00c-2150f7298b37.jpg"
                  alt="Shalimar Farms Instagram Post"
                />
                <div className="instagram-overlay">
                  <a
                    href="https://www.instagram.com/shalimarfarms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    <FaInstagram size={40} />
                    <span>View on Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/*====== Instagram Post 2 ======*/}
            <div className="single-instagram-item">
              <div className="instagram-img-wrapper">
                <img
                  src="/assets/images/instagram/b5ddbfba-cfad-4660-a6ed-7ddea502d9df.jpg"
                  alt="Shalimar Farms Instagram Post"
                />
                <div className="instagram-overlay">
                  <a
                    href="https://www.instagram.com/shalimarfarms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    <FaInstagram size={40} />
                    <span>View on Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/*====== Instagram Post 3 ======*/}
            <div className="single-instagram-item">
              <div className="instagram-img-wrapper">
                <img
                  src="/assets/images/instagram/4003583e-c04f-4f7b-901d-bfe2332296f6.jpg"
                  alt="Shalimar Farms Instagram Post"
                />
                <div className="instagram-overlay">
                  <a
                    href="https://www.instagram.com/shalimarfarms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    <FaInstagram size={40} />
                    <span>View on Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/*====== Instagram Post 4 ======*/}
            <div className="single-instagram-item">
              <div className="instagram-img-wrapper">
                <img
                  src="/assets/images/instagram/5efb2b69-4126-4788-93c5-02c14755eba1.jpg"
                  alt="Shalimar Farms Instagram Post"
                />
                <div className="instagram-overlay">
                  <a
                    href="https://www.instagram.com/shalimarfarms/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    <FaInstagram size={40} />
                    <span>View on Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            {/*====== Add more posts as needed ======*/}

          </Slider>

          {/*====== Call to Action ======*/}
          <div className="row justify-content-center mt-50">
            <div className="col-lg-12 text-center">
              <div className="social-cta-buttons">
                <a
                  href="https://www.instagram.com/shalimarfarms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social instagram-btn"
                >
                  <FaInstagram size={24} />
                  <span>Follow on Instagram</span>
                </a>
                <a
                  href="https://www.youtube.com/@shalimarfarms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-social youtube-btn"
                >
                  <FaYoutube size={24} />
                  <span>Subscribe on YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/*Instagram and Youtube Section*/}
      {/*====== Start CTA Section  ======*/}
      <section
        id="cta"
        className="cta-bg-section bg_cover mt-5 pt-100 pb-50 p-r z-1"
        style={{ backgroundImage: "url(assets/images/bg/cta-bg-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              {/*======  CTA Content Box  ======*/}
              <div className="cta-content-box text-white mb-50 wow fadeInLeft">
                <div className="section-title mb-20">
                  <span className="sub-title">
                    <i className="flaticon-plant" />
                    Farm Tour & Consultation
                  </span>
                  <h2>See the Breeding, Bloodlines & Care in Person</h2>
                </div>
                <p className="mb-35">
                  Whether you're a collector, breeder, or enthusiast, Shalimar
                  Farms offers guided visits and personalised bloodline
                  consultation to help you understand the true Kota standard,
                  lineage, and care.
                </p>
                <button
                  onClick={handleShowContact}
                  className="main-btn golden-btn"
                >
                  Schedule a Private Visit
                </button>
              </div>
            </div>
            <div className="col-lg-7">
              {/*======  CTA Image Box  ======*/}
              <div className="cta-image-box mb-50 wow fadeInRight">
                <img src="/assets/images/farm/SON00226.JPG" alt="Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section  ======*/}
    </Layout>
  );
};
export default Index2;