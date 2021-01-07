import React from "react";
import { CardList } from "./cardList";

export const Content = ({ value, onDelete }) => {
  return <CardList value={value} onDelete={onDelete} />;
}; 
