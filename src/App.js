// Import App.css File.
import './App.css';
// Import TopButtons Component.
import TopButtons from './components/TopButtons';
// Import Inputs Component.
import Inputs from './components/Inputs';
// Import TimeAndLocation Component.
import TimeAndLocation from './components/TimeAndLocation';
// Import TemperatureAndDetails Component.
import TemperatureAndDetails from './components/TemperatureAndDetails';
// Import Forecast Component.
import Forecast from './components/Forecast';

function App() {
  return (
    <div className="App">
      {/* TopButtons Component */}
      <TopButtons/>
      {/* Inputs Component */}
      <Inputs/>
      <br />
      {/* TimeAndLocation Component */}
      <TimeAndLocation/>
      <br />
      {/* TemperatureAndDetails Component */}
      <TemperatureAndDetails/>
      <br />
      {/* Forecast Component */}
      <Forecast/>
      <br />
      <Forecast/>
      <br />
    </div>
  );
}

export default App;
