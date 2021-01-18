import React, { useState } from "react";
import { Header } from "./header";
import { Content } from "./content";
import { Instruction } from "./instructions";
import { Footer } from "./footer";
import { CardProvider } from "./ContextProvider";

import "./App.css";

const App = () => {
  const [instructions, setInstructions] = useState("Instructions");

  const [footer, setFooter] = useState("Footer");

  return (
    <CardProvider>
      <div className="App">
        <Header />
        <div className="contentInstruction">
          <Content />
          <Instruction value={instructions} />
        </div>
        <Footer value={footer} />
      </div>
    </CardProvider>
  );
};

export default App;
