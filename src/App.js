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
import ReactRouter from './Components/ReactRouterExample/ReactRouter';
import {BrowserRouter} from "react-router-dom"
import RouterFirstComp from './Components/ReactRouterLogin/RouterFirstComp';
import DynamicRoutes from './Components/DynamicRoutesExample/DynamicRoutes';
import NestedRoutes from './Components/NestedRoutesExample/NestedRoutes';
import CompA from './Components/PropsPassing.js/CompA';
import Dashboard from './Components/ContextUsage/Dashboard';
import Counter from './Components/Optimisations/Counter';
import CallbackExample from './Components/Optimisations/CallbackExample';
import MemoExample from './Components/Optimisations/MemoExample';

function App() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* <TodoList></TodoList> */}
          {/* <UseReducer></UseReducer> */}
          {/* <ReactRouter></ReactRouter> */}
          {/* <RouterFirstComp></RouterFirstComp> */}
          {/* <DynamicRoutes></DynamicRoutes> */}
          {/* <NestedRoutes></NestedRoutes> */}
          {/* <CompA></CompA> */}
          {/* <Dashboard></Dashboard> */}
          {/* <Counter></Counter> */}
          {/* <CallbackExample></CallbackExample> */}
          <MemoExample></MemoExample>
        </div>
      </BrowserRouter>
    );

  
}

export default App;

