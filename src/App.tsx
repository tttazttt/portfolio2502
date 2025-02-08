import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MainVisual from "./components/MainVisual";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Skills from "./components/Skills";
import Tab from "./components/Tab";
import Works from "./components/Works";
import Thanks from "./components/Thanks";
import Footer from "./components/Footer";

function App() {
  const [clicked, setClicked] = useState<boolean>(false);

  const clickHandler = () => {
    setClicked(true);
  };

  return (
    <>
      <Header />
      <Sidebar />
      <Tab />
      <MainVisual clickHandler={clickHandler} />
      <Profile clicked={clicked} />
      <Skills />
      <Works />
      <Thanks />
      <Footer />
    </>
  );
}

export default App;
