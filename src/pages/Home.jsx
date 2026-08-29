import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ActionBanner from "../components/ActionBanner";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";

const Home = () => {
  return (
    <div className="relative font-sans text-slate-800 bg-slate-50 overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <ActionBanner />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Home;
