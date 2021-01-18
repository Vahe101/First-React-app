import { Button } from "../shared/button";
import { useContext } from "react";
import Context from "../Context";

import "./style.css";

export const Header = () => {
  const { createCard, sortCards } = useContext(Context);

  return (
    <div className="header">
      <Button className="button" value="Add Card" onClick={createCard}></Button>
      <Button
        className="button"
        value="Sort Cards"
        onClick={sortCards}
      ></Button>
    </div>
  );
};
