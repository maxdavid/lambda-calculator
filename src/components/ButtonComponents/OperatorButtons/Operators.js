import React, { useState } from 'react';

import OperatorButton from './OperatorButton';
import { operators as operatorsArray } from '../../../data';

const Operators = props => {
  const [operators, setOperators] = useState(operatorsArray);

  return (
    <div className='operators-buttons'>
      {operators.map(operator => {
        return (
          <OperatorButton
            clickHandler={props.clickHandler}
            display={props.display}
            glyph={operator}
          />
        );
      })}
    </div>
  );
};

export default Operators;
