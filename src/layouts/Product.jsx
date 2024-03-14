import { NavLink } from "react-router-dom";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
import "swiper/swiper-bundle.css";
import { useEffect, useState } from "react";
// register Swiper custom elements
register();

export const Product = ({ setLoader }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    setLoader(true);
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoader(false);
      });
  }, []);
  return (
    product && (
      <div className="container container-gap circle-section" id="product">
        <div className="our-product">
          <h2 className="heading">Our Products</h2>
          <div className="product-list">
            {product.map((product) => {
              return (
                <div key={product.id}>
                  <NavLink to={`/product/${product.id}`} className="card">
                    <div>
                      <picture>
                        {/* <source
                          srcSet={`images/product/home/${
                            product.name.toLowerCase().split(" ")[0]
                          }.webp`}
                          media="(min-width:768px)"
                        /> */}
                        <img
                          src={`images/product/home/${
                            product.name.toLowerCase().split(" ")[0]
                          }.webp`}
                          alt={product.name}
                          style={{ transform: "scale(1.2)" }}
                          className="img"
                        />
                      </picture>
                    </div>

                    <div className="overlay-text">
                      <h3 className="title  ">{product.name}</h3>
                      {product.comingsoon && (
                        <p className="text">Coming Soon</p>
                      )}
                    </div>
                  </NavLink>
                </div>
              );
            })}
          </div>
          <div className="circle-parent">
            <div className="circle orange position-1"></div>
            <div className="circle white  position-2"></div>
          </div>
        </div>
      </div>
    )
  );
};
