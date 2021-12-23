import React, {useState} from "react";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InfoSection from "./components/infoSection";
import InfoSection2 from "./components/infoSection2";
import InfoSection3 from "./components/infoSection3";
import InfoSection4 from "./components/infoSection4";
import Navbar from "./components/Navbar";
import { InfoData, InfoDataFour, InfoDataThree, InfoDataTwo } from "./data/infoData";
import { SliderData } from "./data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData} />
      <InfoSection2 {...InfoDataTwo} />
      <InfoSection3 {...InfoDataThree}/>
      <InfoSection4 {...InfoDataFour}/>
      <Footer/>
    </>
  );
}

export default App;
