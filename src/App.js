import logo from './logo.svg';
import './App.css';
import ToggleComponent from './Components/ToggleComponent';
import DigitalClock from './Components/DigitalClock';
import React, { useEffect, useState } from 'react';
import UncontrolledCompExample from './Components/UncontrolledCompExample';
import FormComponent from './Components/FormExample/FormComponent';
import UseEffectRootComp from './Components/UseEffectExample/UseEffectRootComp';
import ApiCallComp from './Components/ApiCallExample/ApiCallComp';

function App() {
    return (
      <div className="App">
        <ApiCallComp></ApiCallComp>
      </div>
    );

  
}

export default App;

