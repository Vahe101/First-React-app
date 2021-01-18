import React, { useState, useEffect } from "react";
import Context from "./Context";

export const CardProvider = ({ children }) => {
  const limit = 100;

  const storageKey = "elemsOfArray";

  const request = new Request(`http://127.0.0.1:3000/`);

  const [elements, setElements] = useState([]);

  useEffect(() => {
    const storageElements = getItemsFromStorage(storageKey);
    if (storageElements) {
      const array = JSON.parse(storageElements);
      setElements(array);
    } else {
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
  };

  const getItemsFromStorage = (key) => {
    return localStorage.getItem(key);
  };

  const getRandom = () => {
    return Math.floor(Math.random() * limit);
  };

  const value = {
    createCard,
    sortCards,
    deleteCard,
    elements,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
