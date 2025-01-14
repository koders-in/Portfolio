import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./PortfolioDescriptionPage.scss";
import mobile from "/mobile.png";
import Aos from "aos";
import midTopCenterCube from "../../assets/tp-mid-top-cube.svg";
import bottomLeftCube from "../../assets/tp-top-right-cube.svg";
import hiddenCube1 from "../../assets/hidden-by-img-1-anime.svg";
import groupBg from "../../assets/Group.svg";
import sd1 from "../../assets/not-visible-sd.svg";
import sd2 from "../../assets/light-sd.svg";
import sd3 from "../../assets/dark-sd.svg";
import { Link, useParams } from "react-router-dom";
import { PortfolioContext } from "../../context/context";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { GlassMagnifier } from "react-image-magnifiers";

const PortfolioDescriptionPage = () => {
  const { title } = useParams();
  const { data } = useContext(PortfolioContext);
  const BASE_URL = "https://strapi.koders.in";
  const project = data.find((item) => item.title.toLowerCase().trim() === title.toLowerCase().trim());

  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const { left, top } = e.target.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - left,
      y: e.clientY - top,
    });
  }, []);

  const handleMouseLeave = () => setIsHovering(false);
  const handleMouseEnter = () => setIsHovering(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.1;
    }
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  if (!project) {
    return null;
  }

  const cardsData = [
    {
      imgSrc: "/features.webp",
      title: "Seamless UX",
      desc: "Enjoy smooth navigation and quick checkouts.",
      delay: "200",
    },
    {
      imgSrc: "/category.webp",
      title: "Category",
      desc: "Desktop Web App.",
      delay: "300",
    },
    {
      imgSrc: "/platform.webp",
      title: "Key Highlights",
      desc: "Chatbot Integration, Real-Time Data Sync",
      delay: "400",
    },
    {
      imgSrc: "/features.webp",
      title: "Effortless Efficiency",
      desc: "Discover products that match your style.",
      delay: "500",
    },
  ];

  const handleNavigate = () => {
    window.open("https://koders.in/start-project");
  };

  return (
    <>
      {/* Hero Background Images */}
      <img
        src={midTopCenterCube}
        alt="Mid Top Center Cube"
        className="img-3"
        loading="lazy"
      />
      <img
        src={bottomLeftCube}
        alt="Bottom Left Cube"
        className="blc"
        loading="lazy"
      />
      <img
        src={hiddenCube1}
        alt="Hidden Cube 1"
        className="hc-1"
        loading="lazy"
      />

      <img src={groupBg} alt="" className="groupBg" />

      {/* Hero Section */}
      <div className="francesco-gioia-container">
        <div className="content" data-aos="zoom-in">
          <div className="hero-content">
            <h1>EXPLORE</h1>
            <span className="name">{project.title.toUpperCase()}</span>
          </div>
          <p className="description" data-aos="fade-up">
            {project.description}
          </p>
        </div>
        <div className="down-btn">
          <Link to={"#features-section"}>
            <img src={sd1} alt="Scroll Down Light" loading="lazy" />
            <img src={sd2} alt="Scroll Down Medium" loading="lazy" />
            <img src={sd3} alt="Scroll Down Dark" loading="lazy" />
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
 
  <div className="featureheading">
    <h1 data-aos="fade-right" data-aos-delay="200">
      <span>Our</span> Features
    </h1>
  </div>
  <p className="feature-text">
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat reprehenderit delectus magnam. Est explicabo itaque fugit sed. Delectus cupiditate sed perspiciatis dicta incidunt iusto est, possimus illo sunt, deserunt suscipit.
  </p>
  <div className="bg">
        <img src="/bg.svg" alt="Background Decoration" loading="lazy" />
      </div>

  <div className="featurecards ">
    {cardsData.map(({ imgSrc, title, desc }, index) => (
      <div className="feature-card" key={index}>
        <div className="test">
          <img src={imgSrc} alt={title} className="feature-img" data-aos="slide-up" data-aos-delay="100" />
          <h2 data-aos="slide-up" data-aos-delay="200">{title}</h2>
        </div>
        
          <p className="feature-desc" data-aos="slide-up" data-aos-delay="300">{desc}</p>
        
      </div>
    ))}
    
  </div>
</div> 

      {/* Highlights Section */}
      <div className="carousal-section">
        <h1 className="carousal-heading" data-aos="fade-in">
          HIGHLIGHTS
        </h1>
        <p className="carousal-supporting">
          Unveiling the essence of this project
        </p>
        <p className="carousal-para">
          Innovation, Impactful, and Crafted with Excellence.
        </p>
      </div>
      <ImageSlider images={project.imageSrc} />

      {/* Project Overview Section */}
      <div className="portfolio-description">
        <h2 className="overview-heading">DESCRIPTION</h2>
        <div className="container" data-aos="zoom-in">
          <div className="image-section" data-aos="fade-right">
            <img src={mobile} alt="Project Showcase" className="hover-tilt" />
            <video
              className="phone-video"
              src="https://videos.pexels.com/video-files/29834995/12813064_1440_2560_32fps.mp4"
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </div>
          <div className="text-section" data-aos="fade-left">
            <div className="details">
              <div>
                <h2>About</h2>
                <p>
                  MUNCHING BROWSER is a detailed landing page designed to
                  showcase its unique features, highlight an impressive
                  portfolio, foster meaningful community interactions, and
                  provide in-depth answers to frequently asked questions.
                </p>
              </div>
              <div>
                <h2>Goal</h2>
                <p>
                  It aims to provide clear and concise answers to frequently
                  asked questions, ensuring users can easily access important
                  information.
                </p>
              </div>
              <div>
                <h2>Technologies</h2>
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  {project.techStack.map((tech, index) => {
                    const icon = project.imageIcon[index]; // Get the corresponding icon for the tech stack
                    return (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        {icon && (
                          <img
                            src={`${BASE_URL}${icon.url}`} // Prepend the base URL to the icon URL
                            alt={tech}
                            width="20"
                            height="20"
                          />
                        )}
                        <span>{tech}</span> {/* Display tech name */}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Monochromatic Image Section */}
      <div
        className="image-container"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bffe90212479261.673680a58bbd9.jpg"
          alt="Portfolio Image"
          className="base-image"
        />
        {isHovering && (
          <div
            className="hover-image"
            style={{
              backgroundImage: `url('https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/bffe90212479261.673680a58bbd9.jpg')`,
              clipPath: `circle(50px at ${hoverPosition.x}px ${hoverPosition.y}px)`,
              backgroundSize: "cover",
              transform: "scale(2)",
              transformOrigin: `${hoverPosition.x}px ${hoverPosition.y}px`,
            }}
          ></div>
        )}
      </div>

      {/* Start Project Section */}
      <div className="body">
        <div className="content">
          <h1>Transform your <span>Vision</span> into <span>Reality!</span></h1>
          <p>
            Custom-built solutions designed to elevate businesses and meet
            unique needs.
          </p>
          <button className="read-more-btn" onClick={handleNavigate}>Start A New Project</button>
        </div>
        <div className="image">
          <img src="/onboard1.webp" alt="Phone with chat bubbles" />
        </div>
      </div>
    </>
  );
};

export default PortfolioDescriptionPage;

// ImageSlider
const ImageSlider = ({ images }) => {
  const swiperRef = useRef(null); // Swiper reference to control slide programmatically
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="portfolio-images-section">
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale: 0.8,
        }}
        modules={[EffectCoverflow, Autoplay, Navigation]}
        className="image-slider"
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={false} // Disable default navigation
        touchMoveStopPropagation={false}
        allowTouchMove={false}
      >
        {images.map((image, index) => {
          const isCenter = activeIndex === index;
          return (
            <SwiperSlide
              key={index}
              className={`image-slide ${isCenter ? "center-slide" : ""}`}
            >
              <div
                className="image-container"
                style={{ borderRadius: "15px", overflow: "hidden" }}
              >
                <GlassMagnifier
                  imageSrc={`https://strapi.koders.in${
                    image?.formats?.large?.url ||
                    image?.formats?.medium?.url ||
                    image?.formats?.small?.url ||
                    image?.formats?.thumbnail?.url ||
                    image?.url
                  }`}
                  imageAlt={`Slide ${index + 1}`}
                  magnifierBorderSize={5}
                  magnifierSize={150}
                  zoomFactor={3}
                >
                  <img
                    src={`https://strapi.koders.in${
                      image?.formats?.large?.url ||
                      image?.formats?.medium?.url ||
                      image?.formats?.small?.url ||
                      image?.formats?.thumbnail?.url ||
                      image?.url
                    }`}
                    alt={`Slide ${index + 1}`}
                    className="portfolio-img"
                  />
                </GlassMagnifier>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom navigation arrows */}
      <div
        className="swiper-button-prev"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        &#10094;
      </div>
      <div
        className="swiper-button-next"
        onClick={() => swiperRef.current?.slideNext()}
      >
        &#10095;
      </div>
    </div>
  );
};
