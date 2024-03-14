import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Header } from "./layouts/Header";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Footer } from "./layouts/Footer";
import { useEffect, useState } from "react";
import { ScrollTop } from "./components/ScrollTop";

function App() {
  let path = window.location.pathname;
  const [loader, setLoader] = useState(true);
  const [pathName, setPathName] = useState(path.split("/")[1] == "product");
  useEffect(() => {
    window.onload = () => {
      setLoader(false);

    }
  }, []);
  return (
    <>
      {loader && (
        <div className="loader">
          <img src="/images/loader.gif" />
        </div>
      )}
      <BrowserRouter>
        <ScrollTop />
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                loader={loader}
                setLoader={setLoader}
                pathName={pathName}
                setPathName={setPathName}
              />
            }
          />
          <Route
            path="/product/:id"
            element={<Product loader={loader} setLoader={setLoader} />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
