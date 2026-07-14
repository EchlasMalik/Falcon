import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCatalogue from "./components/ProductCatalogue";
import HowItWorks from "./components/HowItWorks";
import WhyFalcon from "./components/WhyFalcon";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-falcon-bg overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <ProductCatalogue />
        <HowItWorks />
        <WhyFalcon />
      </main>
      <Footer />
    </div>
  );
}

export default App;
