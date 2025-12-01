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

export default function App() {
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
      <BusinessModel />
      <Costs />
      <Conclusions />
      <Footer />
    </>
  );
}
