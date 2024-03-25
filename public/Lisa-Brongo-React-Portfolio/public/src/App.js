import React, { useState } from "react";
import Header from "../src/components/Header";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Portfolio from "../src/components/Portfolio";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  // State to manage the current tab
  const [currentTab, setCurrentTab] = useState("About");

  // Method to render the current tab content
  const renderTab = () => {
    switch (currentTab) {
      case "About":
        return <About />;
      case "Contact":
        return <Contact />;
      case "Portfolio":
        return <Portfolio />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Lisa Brongo's Portfolio | {currentTab}</title>
      </Helmet>
      <Header
        currentTab={currentTab}
        handleTabChange={setCurrentTab}
      />
      <main>{renderTab()}</main>
      <Footer />
    </>
  );
}

export default App;