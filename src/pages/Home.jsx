import banner from "/images/homepage/banner.webp";
import { VR } from "../components/VR";
import { Product } from "../layouts/Product";
import { About } from "../layouts/About";
import { Contact } from "../layouts/Contact";
import { Element } from "react-scroll";
import { Sidebar } from "../layouts/Sidebar";

export const Home = ({ loader, setLoader, pathName, setPathName }) => {
  return (
    <>
      <Sidebar
        loader={loader}
        setLoader={setLoader}
        pathName={pathName}
        setPathName={setPathName}
      />
      <div className="top-shape desktop">
        <svg
          viewBox="0 0 1122 766"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M767 766C762.5 379 256 86 0.5 -0.5H1123.5V766H767Z"
              fill="#FF5813"
            />
          </g>
        </svg>
        {/* <img src={topshap} alt="" /> */}
      </div>
      <div className="top-shape  mobile">
        <svg
          viewBox="0 0 330 390"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path
              d="M236.844 390C235.453 185.519 78.9479 30.7045 0 -15H347V390H236.844Z"
              fill="#FF5813"
            />
          </g>
        </svg>
      </div>
      <Element className="banner circle-section" name="home" id="home">
        <VR image={banner} />
        <h3>Reality Meets Imagination</h3>
        <div className="circle-parent">
          <span className="position-1 circle white filter-8"></span>
          <span className="position-2 circle white filter-8"></span>
          <span className="position-3 circle white"></span>
          <span className="position-4 circle black filter-2"></span>
          <span className="position-5 circle black"></span>
          <span className="position-6 circle orange filter-4"></span>
          <span className="position-7 circle orange filter-4"></span>
          <span className="position-8 circle orange"></span>
          <span className="position-9 circle orange"></span>
        </div>
      </Element>

      <Product setLoader={setLoader} />

      <About />

      <Contact />
    </>
  );
};
