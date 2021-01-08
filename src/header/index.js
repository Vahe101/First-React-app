import { Button } from '../shared/button';

import './style.css';

export const Header = ({ onCreate, onSort }) => {
  return (
    <div className='header'>
        <Button className='button' value="Add Card" onClick={onCreate}></Button>
        <Button className='button' value="Sort Cards" onClick={onSort} ></Button>
    </div> 
  );
}
