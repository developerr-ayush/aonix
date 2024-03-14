import { NavLink } from "react-router-dom";
import { VR } from "../components/VR";
import PropTypes from "prop-types";

export const ProductBanner = ({ title, text, features }) => {
  return (
    <div className="container circle-section ">
      <div className="product-banner">
        <div className="content circle-parent relative">
          <NavLink to="/" className="back">
            <svg
              viewBox="0 0 9 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Vector">
                <path
                  id="Vector_2"
                  d="M8.0975 16.84L1.5775 10.32C0.8075 9.55 0.8075 8.29 1.5775 7.52L8.0975 1"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            {title}
          </NavLink>
          <p className="text">{text}</p>
          <ul className="features  ">
            {features &&
              features.map((feature) => {
                return (
                  <li key={feature} className="features-item">
                    {feature}
                  </li>
                );
              })}
          </ul>
          <span className="circle white position-1"></span>
          <span className="theme circle position-2"></span>
        </div>
        <div className="visual circle-parent relative">
          <VR
            image={`/images/product/${title.toString().toLowerCase()}.webp`}
          />
          <h3>Reality Meets Imagination</h3>

          <span className="circle theme position-3 filter-4"></span>
          <span className="circle theme position-4 filter-4"></span>
          <span className="circle white position-5 filter-8"></span>
          <span className="circle black position-6"></span>
        </div>
      </div>
    </div>
  );
};

ProductBanner.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  features: PropTypes.array,
};
