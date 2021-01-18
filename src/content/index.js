import React, { useContext } from "react";
import { CardList } from "./cardList";
import Context from "../Context";

export const Content = () => {
  const { deleteCard, elements } = useContext(Context);

  return <CardList value={elements} onDelete={deleteCard} />;
};
