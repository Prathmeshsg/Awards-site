import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Story from "./components/Story";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden w-screen">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
