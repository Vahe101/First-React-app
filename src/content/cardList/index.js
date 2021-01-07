import { Card } from "../card";

import "./style.css";

export const CardList = ({ value, onDelete }) => {
  const onDeleteInner = (index) => onDelete(index);

  return (
    <div className="content">
      {value.map((q, index) => (
        <Card value={q} onDelete={() => onDeleteInner(index)}></Card>
      ))}
    </div>
  );
};
