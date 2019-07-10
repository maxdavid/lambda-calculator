import React, { useState } from 'react';

import SpecialButton from './SpecialButton';
import { specials as specialsArray } from '../../../data';

const Specials = props => {
  const [specials, setSpecials] = useState(specialsArray);

  return (
    <div className='specials-buttons'>
      {specials.map(special => {
        return (
          <SpecialButton clickHandler={props.clickHandler} glyph={special} />
        );
      })}
    </div>
  );
};

export default Specials;
