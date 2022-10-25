import "./App.css";
import Burger from "./components/burger/Burger";
import Hero from "./components/hero/Hero";
import Improvement from "./components/improvement/Improvement";
import Opinions from "./components/opinions/Opinions";
import QualityLeads from "./components/qualityLeads/QualityLeads";

function App() {
  return (
    <div className="App">
      <Burger />
      <Hero />
      <Improvement />
      <QualityLeads />
      <Opinions />
    </div>
  );
}

export default App;
