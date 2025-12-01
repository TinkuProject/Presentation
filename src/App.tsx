import BackgroundDecoration from "./components/BackgroundDecoration";

import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Problem from "./components/Problem";
import Objectives from "./components/Objectives";
import Methodology from "./components/Methodology";
import Diagrams from "./components/Diagrams";
import DatabaseSection from "./components/DatabaseSection";
import TechStack from "./components/TechStack";
import Testing from "./components/Testing";
import BusinessModel from "./components/BusinessModel";
import Costs from "./components/Costs";
import Conclusions from "./components/Conclusions";
import Footer from "./components/Footer";
import ScrollArrow from "./components/ScrollArrow";

function App() {
  const sections = [
    "resumen",
    "problema",
    "objetivos",
    "metodologia",
    "diagramas",
    "base-datos",
    "stack",
    "pruebas",
    "costos",
    "modelo-negocio",
    "conclusiones" // Última → no muestra flecha
  ];

  return (
    <>
      <BackgroundDecoration />

      <Hero />
      <Summary />
      <Problem />
      <Objectives />
      <Methodology />
      <Diagrams />
      <DatabaseSection />
      <TechStack />
      <Testing />
      <Costs />
      <BusinessModel />
      <Conclusions />
      <Footer />

      {/* Flecha flotante inteligente */}
      <ScrollArrow sections={sections} />
    </>
  );
}

export default App;
