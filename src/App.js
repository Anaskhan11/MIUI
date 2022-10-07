import "./App.css";
import PreNavbar from "./component/PreNavbar";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Slider from "./component/Slider";
import data from "./data/data.json";
import Offers from "./component/Offers";

import Heading from "./component/Heading";
import StarProduct from "./component/StarProduct";
import HotAccessoriesMenu from "./component/HotAccessoriesMenu";
import HotAccessories from "./component/HotAccessories";
import ProductReviews from "./component/ProductReviews";
import Videos from "./component/Videos";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import NavOptions from "./component/NavOptions";

const { banner, offer, starProduct } = data;

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        fitnessAndLifeStyle={data.fitnessAndLifeStyle}
        home={data.home}
        audio={data.audio}
        accessories={data.accessories}
      />
      <Slider start={banner.start} />
      <Offers offer={offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={starProduct} />
      <Heading text="HOT ACCESSERIES" />
      <HotAccessoriesMenu />

      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />

        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />
        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifeStyle={data.hotAccessories.lifeStyle}
              lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessoires={data.hotAccessories.mobileAccessories}
              mobileAccessoiresCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VEDIOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />

      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
