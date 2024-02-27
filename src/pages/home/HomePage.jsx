import About from "../../components/about/About.jsx";
import Banner from "../../components/banner/Banner.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Hero from "../../components/hero/Hero.jsx";
import WhyChoose from "../../components/whyChoose/WhyChoose.jsx";


export default function HomePage() {
  return (
    <>
     <Hero/>
     <Banner/>
     <WhyChoose/>
     <About/>
     <Banner/>
     <Footer/>
    </>
  )
}
