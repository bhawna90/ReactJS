import logo from './logo.svg';
import './App.css';
import ToggleComponent from './Components/ToggleComponent';
import DigitalClock from './Components/DigitalClock';
import React, { useEffect, useState } from 'react';
import UncontrolledCompExample from './Components/UncontrolledCompExample';
import FormComponent from './Components/FormExample/FormComponent';
import UseEffectRootComp from './Components/UseEffectExample/UseEffectRootComp';
import ApiCallComp from './Components/ApiCallExample/ApiCallComp';
import TodoList from './Components/Todo/TodoList';
import UseReducer from './Components/Test/UseReducer';
import ReactRouter from './Components/ReactRouterExample/ReactRouter';
import {BrowserRouter} from "react-router-dom"
import RouterFirstComp from './Components/ReactRouterLogin/RouterFirstComp';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <TodoList></TodoList> */}
          {/* <UseReducer></UseReducer> */}
          {/* <ReactRouter></ReactRouter> */}
          <RouterFirstComp></RouterFirstComp>
        </div>
      </BrowserRouter>
    );

  
}

export default App;

