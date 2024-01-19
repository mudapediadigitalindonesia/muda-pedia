import { Button } from "@nextui-org/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// components
import Navbar from "../components/user/Navbar"
import Hero from "../components/user/landing page/Hero";
import AboutUs from "../components/user/landing page/AboutUs";
import Features from "../components/user/landing page/Features";
import Team from "../components/user/landing page/Team";
import Faq from "../components/user/landing page/Faq";
import Blog from "../components/user/landing page/Blog";
import Footer from "../components/user/Footer";

const Home = () => {
  return (
    <HelmetProvider>
      <section> {/* wrapper html */}
        <Helmet>
          <title>Home</title>
        </Helmet>
      </section>
        <section>
          <Navbar />
        </section>
        <section className="scroll-mt-[10vh] grid gap-28"> {/* wrapper body */}
          <Hero />
          <AboutUs/>
          <Features />
          <Team />
          <Blog />
          <Faq />
          <section>
            <Footer/>
          </section>
        </section>
    </HelmetProvider>
  );
};

export default Home;
