import "./styles/index.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Stat from "./sections/Stat";
import Clients from "./sections/Clients";
import Offer from "./sections/Offer";
import CreditCard from "./sections/CreditCard";
import Marketing from "./sections/Marketing";
import Features from "./sections/Features";
import Accordion from "./sections/Accordion";
import Manage from "./sections/Manage";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="container overflow-x-clip bg-hero-pattern ">
      <Navbar />
      <section className="md:space-y-32 space-y-12">
        <Hero />
        <Stat />
        <Clients />
        <Offer />
        <Features />
      </section>
      <CreditCard />
      <Marketing />
      <Accordion />
      <Manage />
      <Footer />
    </div>
  );
}

export default App;
