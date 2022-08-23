import LandingProducts from "../../components/LandingProducts";
import Carousel from "../../components/Carousel";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import style from "./index.module.css";
import SignInGoogle from "../../components/SignInGoogle/SigInGoogle";

export default function Landing() {
 return (
  <div className={style.landing}>
   <NavBar />
   <div className={style.mainDiv}>
    <Carousel />
    <LandingProducts />
    <br />
   </div>
   <SignInGoogle/>
   <Footer />
  </div>
 );
}
