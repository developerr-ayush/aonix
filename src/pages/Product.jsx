import { ProductBanner } from "../layouts/ProductBanner";
import { ProductForm } from "../layouts/ProductForm";
import { SubProducts } from "../layouts/SubProducts";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Sidebar2 } from "../layouts/Sidebar2";
export const Product = ({ loader, setLoader, pathName, setPathName }) => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const productData = product.find((product) => product.id == id);
  useEffect(() => {
    setLoader(true);
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoader(false);
      });
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Sidebar2
        loader={loader}
        setLoader={setLoader}
        pathName={pathName}
        setPathName={setPathName}
      />
      {productData && (
        <div
          className="product-page"
          style={{ "--theme-color": productData.themecolor }}
        >
          <div className="top-shape desktop">
            <svg
              viewBox="0 0 1122 766"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M767 766C762.5 379 256 86 0.5 -0.5H1123.5V766H767Z"
                  fill="var(--theme-color,#1371FF)"
                />
              </g>
            </svg>
            {/* <img src={topshap} alt="" /> */}
          </div>
          <div className="top-shape mobile">
            <svg
              viewBox="0 0 330 390"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path
                  d="M236.844 390C235.453 185.519 78.9479 30.7045 0 -15H347V390H236.844Z"
                  fill="var(--theme-color,#1371FF)"
                />
              </g>
            </svg>
          </div>
          <ProductBanner
            title={productData.name}
            text={productData.maintext}
            features={productData.features}
          />
          {productData.subproduct && (
            <SubProducts
              name={productData.name}
              subProducts={productData.subproduct}
            />
          )}
          <ProductForm />
        </div>
      )}
    </>
  );
};
Product.propTypes = {
  setLoader: PropTypes.func,
};
