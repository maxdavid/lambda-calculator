import React from 'react';
// import '../ButtonComponents.scss';

const NumberButton = props => {
  const bgcolor = '#094377';
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

export default NumberButton;
