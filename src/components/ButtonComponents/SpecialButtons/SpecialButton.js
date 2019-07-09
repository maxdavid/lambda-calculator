import React from 'react';

const SpecialButton = props => {
  const bgcolor = '#0b5d9b';
  return (
    <div
      className='calc-button'
      style={{ backgroundColor: bgcolor }}
      onClick={
        props.glyph === 'C'
          ? () => props.clickHandler('0')
          : () =>
              props.clickHandler(
                (props.glyph + props.display).replace(/^[0|\D]*/, '')
              )
      }
    >
      {props.glyph}
    </div>
  );
};

export default SpecialButton;
