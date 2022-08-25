import "./App.css";
import PortfolioHeader from "./components/header.js";
import SecondHeader from "./components/secondheader.js";
import SkillSet from "./components/skillset";
import ExampleProjects from "./components/exampleprojects";
import { Footer } from "./components/footer";

function App() {
  return (
    <div className="App">
      <PortfolioHeader />

      <SecondHeader />

      <SkillSet />
      <div></div>

      <ExampleProjects />

      <Footer />
    </div>
  );
}

export default App;
