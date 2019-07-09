import React from 'react';

const OperatorButton = props => {
  const bgcolor = '#007291';
  return (
    <div
      className='calc-button'
      style={{ backgroundColor: bgcolor }}
      onClick={
        props.glyph.value === '='
          ? () => props.clickHandler(eval(props.display))
          : () =>
              props.clickHandler(
                (props.display + props.glyph.value).replace(/^[0|\D]*/, '')
              )
      }
    >
      {props.glyph.char}
    </div>
  );
};

export default OperatorButton;
