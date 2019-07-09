import React from 'react';
// import '../ButtonComponents.scss';

const NumberButton = props => {
  const bgcolor = '#094377';
  return (
    <div
      className='calc-button'
      style={{ backgroundColor: bgcolor }}
      onClick={() =>
        props.clickHandler(
          (props.display + props.glyph).replace(/^[0|\D]*/, '')
        )
      }
    >
      {props.glyph}
    </div>
  );
};

export default NumberButton;
