import About from "../sections/about";
import Footer from "../sections/footer";
import Hero from "../sections/hero";
import Navbar from "../sections/navbar";
import Services from "../sections/services";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
