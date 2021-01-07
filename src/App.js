import "./App.css";
import { Header } from "./header";
import { Content } from "./content";
import { Instruction } from "./instructions/index";
import React, { useState, useEffect } from "react";
import { Footer } from "./footer";

const App = () => {
  const request = new Request(`http://127.0.0.1:3000/`);

  const [elements, setElements] = useState([]);
  const instructions = "Instructions";
  const footer = "Footer";

  useEffect(() => {
    fetch(request)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setElements(data);
      })
      .catch((value) => {
        alert(value);
      });
  }, []);

  const createCard = () => {
    const elems = [...elements];
    elems.push(getRandom());
    setElements(elems);
  };

  const deleteCard = (index) => {
    const elems = [...elements];
    elems.splice(index, 1);
    setElements(elems); 
  };

  const getRandom = () => {
    return Math.floor(Math.random() * 100);
  };

  const sortCards = () => {
    const elems = [...elements];
    elems.sort((a, b) => {
      return a - b;
    });
    setElements(elems);
  };

  return (
    <div className="App">
      <Header onCreate={createCard} onSort={sortCards} />
      <div className="contentInstruction">
        <Content onDelete={deleteCard} value={elements}></Content>
        <Instruction value={instructions} />
      </div>
      <Footer value={footer} />
    </div>
  );
};

export default App;
