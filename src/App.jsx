import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <>
      <Background />

      <div className="relative min-h-screen text-white">
        <Navbar />
        <Hero />
        <Features />
        <Stats />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </>
  );
}

export default App;