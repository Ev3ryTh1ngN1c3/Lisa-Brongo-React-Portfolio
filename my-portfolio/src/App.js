import React, { useState } from "react";
import Header from "./components/Header/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Portfolio from "./components/Portfolio/index";
import Resume from "./components/Resume/index";
import Footer from "./components/Footer/index";
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