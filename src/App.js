import "./App.css";
import Burger from "./components/burger/Burger";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Improvement from "./components/improvement/Improvement";
import Opinions from "./components/opinions/Opinions";
import Plans from "./components/plans/Plans";
import QualityLeads from "./components/qualityLeads/QualityLeads";

function App() {
  return (
    <div className="App">
      <Burger />
      <Hero />
      <Improvement />
      <QualityLeads />
      <Opinions />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
