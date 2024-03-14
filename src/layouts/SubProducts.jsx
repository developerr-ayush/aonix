import { useState } from "react";
import PropTypes from "prop-types";

export const SubProducts = ({ subProducts, name }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="container circle-section">
      <div className="sub-product circle-parent relative">
        <h3 className="title">{name} Products</h3>
        <div className="sub-product-container">
          <div className="sub-product-tab">
            <ul
              className="tab-list"
              style={{
                "--item": 5,
                "--current": activeTab,
              }}
            >
              {subProducts.map((product) => {
                return (
                  <li
                    key={product.id}
                    className={`tab-item ${
                      activeTab == product.id ? "tab-active" : ""
                    }`}
                    onClick={() => {
                      setActiveTab(product.id);
                    }}
                  >
                    <img
                      src={`/images/product/icon/${
                        product.title.toLowerCase().split(" ")[0]
                      }.svg`}
                      alt={product.title}
                    />
                    {product.title}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sub-product-tab-container">
            {subProducts.map((product) => {
              return (
                <div
                  key={product.id}
                  className={`sub-product-tab-content ${
                    activeTab == product.id ? "active" : ""
                  }`}
                >
                  <div className="sub-product-tab-content-content">
                    <h3 className="title">{product.title}</h3>
                    <p className="sub-title">{product.subtitle}</p>
                    <p className="para">{product.para}</p>
                    <ul className="features">
                      {product.features.map((feature) => {
                        return (
                          <li key={feature} className="features-item">
                            {feature}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="visual">
                    <img
                      src={`/images/product/vector/${product.title.toLowerCase()}.webp`}
                      alt=""
                      className="vector up_down_animation"
                    />
                    <div className="relative circle-parent  after-circle">
                      <div className="visual-wrap">
                        {product.video ? (
                          <iframe
                            width="560px"
                            height="315px"
                            src={`${product.video}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen
                          ></iframe>
                        ) : (
                          <img
                            src={`/images/product/${product.title.toLowerCase()}.webp`}
                            alt=""
                            className="img"
                          />
                        )}
                      </div>

                      {/* <span className="circle filter-8"></span> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <span className="theme circle position-1"></span>
        <span className="theme circle position-2"></span>
        <span className="circle  white filter-8 position-3"></span>
        <span className="circle  orange filter-4 position-4"></span>
        <span className="circle  white position-5"></span>
      </div>
    </div>
  );
};
SubProducts.propTypes = {
  subProducts: PropTypes.array,
  name: PropTypes.string,
};
