import logo from './logo.svg';
import './App.css';
import ToggleComponent from './Components/ToggleComponent';
import DigitalClock from './Components/DigitalClock';

function App() {
  return (
    <div className="App">
      <ToggleComponent></ToggleComponent>
      <DigitalClock></DigitalClock>
    </div>
  );
}

export default App;
