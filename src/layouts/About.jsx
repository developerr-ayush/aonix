import clock from "/images/icon/clock.svg";
import growth from "/images/icon/growth.svg";
import flash from "/images/icon/flash.svg";
import outline_infinite from "/images/icon/infinite-outline.svg";
import infinite from "/images/icon/infinite.svg";

export const About = () => {
  return (
    <>
      <div className="about-main circle-section" id="about">
        <div className="about container container-gap flex wrap">
          <div className="left-section">
            <div className="circle-parent relative">
              <h2 className="heading">
                About <span className="highlight">AONIX</span>
              </h2>
              <span className="circle orange position-1"></span>
            </div>
            <p className="paragraph">
              Welcome to AONIX, the future of immersive learning and
              entertainment. We are a leading provider of high-quality,
              affordable Virtual Reality (VR) products and services. Our mission
              is to revolutionize the way people learn, work, and play. At
              AONIX, we believe in the power of VR to transform everyday
              experiences into extraordinary ones.Quality is at the heart of
              everything we do. We are committed to providing our customers with
              top-notch VR experiences without breaking the bank. Our team of
              dedicated professionals works tirelessly to ensure that our
              products are not only technologically advanced but also
              user-friendly and accessible. Join us on this exciting journey as
              we continue to push the boundaries of what’s possible with VR.
              Welcome to AONIX, where reality meets imagination
            </p>
          </div>
          <img src={outline_infinite} alt="" className="svg-blur" />

          <div className="circle-parent relative orange-svg">
            <img src={infinite} />
            <span className="circle grey filter-2 position-5"></span>
            <span className="circle white  position-7"></span>
            <span className="circle orange position-3"></span>
          </div>

          <div className="about-box-parent flex circle-parent relative">
            <div className="about-box">
              <img src={flash} alt="" />
              <p>Super fast & reliable</p>
            </div>
            <div className="about-box line">
              <img src={clock} alt="" />
              <p>24 Hour Support</p>
            </div>
            <div className="about-box">
              <img src={growth} alt="" />
              <p>We Get the Results</p>
            </div>

            <span className="circle orange position-2"></span>
            <span className="circle black filter-2 position-4"></span>
            <span className="circle white  position-6"></span>
          </div>
        </div>
        <div className="container">
          <div className="about-img">
            <div>
              <picture>
                <img src="/images/about-img.webp" alt="" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
