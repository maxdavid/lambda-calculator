import React, { useState } from 'react';
import './App.scss';
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

import { Numbers, Operators, Specials } from './components/ButtonComponents';
import { Display, Logo } from './components/DisplayComponents';

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  const [display, setDisplay] = useState('0');

  return (
    <div className='container'>
      <Logo />
      <Display display={display} />
      <div className='buttons'>
        <div className='left-buttons'>
          <Specials display={display} clickHandler={setDisplay} />
          <Numbers display={display} clickHandler={setDisplay} />
        </div>
        <div className='right-buttons'>
          <Operators display={display} clickHandler={setDisplay} />
        </div>
      </div>
    </div>
  );
}

export default App;
