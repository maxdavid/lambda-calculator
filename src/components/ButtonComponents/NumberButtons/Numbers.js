import React, { useState } from 'react';

import NumberButton from './NumberButton';
import { numbers as numbersArray } from '../../../data';

const Numbers = props => {
  const [numbers, setNumber] = useState(numbersArray);

  return (
    <div className='numbers-buttons'>
      {numbers.map(number => {
        return (
          <NumberButton clickHandler={props.clickHandler} glyph={number} />
        );
      })}
    </div>
  );
};

export default Numbers;
