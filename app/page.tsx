import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";

const page = () => {
  return (
    <main>
      <Hero />
      <Features />
      <About />
      <FAQ />
      <Footer/>
    </main>
  );
};

export default page;