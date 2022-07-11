import React from "react";
import About from "../components/About";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import HowWorks from "../components/HowWorks";
import Product from "../components/Product";
import Question from "../components/Question";

class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <Hero />
        <Product />
        <HowWorks />
        <Featured />
        <Question />
        <About />
      </div>
    );
  }
}

export default HomePage;
