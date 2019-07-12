import React from 'react';

const SpecialButton = props => {
  const bgcolor = '#0b5d9b';
  return (
    <div
      className='calc-button'
      style={{ backgroundColor: bgcolor }}
      onClick={() => props.clickHandler(props.glyph)}
    >
      {props.glyph.char}
    </div>
  );
};

export default SpecialButton;
