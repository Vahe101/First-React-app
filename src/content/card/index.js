import React from 'react';
import { Button } from '../../shared/button/index';

import './style.css';

export const Card = ({ value, onDelete }) => {
  return (
    <div className='card'>
      {value}
      <div className='butDiv'>
        <Button className='button' value='X' onClick={onDelete} />
      </div>
    </div>
  );
}
