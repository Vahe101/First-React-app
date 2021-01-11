import React, { useState, useEffect } from "react";
import { Header } from "./header";
import { Content } from "./content";
import { Instruction } from "./instructions";
import { Footer } from "./footer";

import "./App.css";

const App = () => {
  const limit = 100;

  const request = new Request(`http://127.0.0.1:3000/`);

  const [elements, setElements] = useState([]);

  const [instructions, setInstructions] = useState("Instructions");

  const [footer, setFooter] = useState("Footer");

  const [storageKey, setStorageKey] = useState("elemsOfArray");

  useEffect(() => {
    if (!getItemsFromStorage(storageKey)) {
      fetch(request)
        .then((result) => {
          return result.json();
        })
        .then((data) => {
          setItemsToStorage(storageKey, data);
          setElements(data);
        })
        .catch((value) => {
          alert(value);
        });
    } else {
      const array = JSON.parse(getItemsFromStorage(storageKey));
      setElements(array);
    }
  }, []);

  const createCard = () => {
    const elems = [...elements];
    let rand = getRandom();
    let size = elems.length;
    if (elems.indexOf(rand) !== -1 && size < limit) {
      return createCard();
    } else if (size === limit) {
      alert("limit of addition reached");
      return;
    }
    elems.push(rand);
    setElements(elems);
    setItemsToStorage(storageKey, elems);
  };

  const deleteCard = (index) => {
    const elems = [...elements];
    elems.splice(index, 1);
    setElements(elems);
    setItemsToStorage(storageKey, elems);
  };

  const sortCards = () => {
    const elems = [...elements];
    elems.sort((a, b) => {
      return a - b;
    });
    setElements(elems);
    setItemsToStorage(storageKey, elems);
  };

  const setItemsToStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  const getItemsFromStorage = (key) => {
    return localStorage.getItem(key);
  }

  const getRandom = () => {
    return Math.floor(Math.random() * limit);
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
