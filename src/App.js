import logo from './logo.svg';
import './App.css';
import ToggleComponent from './Components/ToggleComponent';
import DigitalClock from './Components/DigitalClock';
import React, { useEffect, useState } from 'react';
import UncontrolledCompExample from './Components/UncontrolledCompExample';
import FormComponent from './Components/FormExample/FormComponent';
import UseEffectRootComp from './Components/UseEffectExample/UseEffectRootComp';
import ApiCallComp from './Components/ApiCallExample/ApiCallComp';
// import TodoList from './Components/Todo/TodoList';
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
import TodoList from './Components/TodoUsingRedux/TodoList';
import { combineReducers, createStore } from "redux";
import todo from "./Components/TodoUsingRedux/reducers/todo"
import { Provider } from "react-redux";

const store = createStore(
  combineReducers({
    todo
  })
);

function App() {
    return (
      <Provider store={store}>
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
            {/* <MemoExample></MemoExample> */}
            <TodoList></TodoList>
          </div>
        </BrowserRouter>
      </Provider>
    );

  
}

export default App;

