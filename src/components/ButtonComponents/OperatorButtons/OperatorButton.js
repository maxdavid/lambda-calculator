import React from 'react';

const OperatorButton = props => {
  const bgcolor = '#007291';
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

export default OperatorButton;
