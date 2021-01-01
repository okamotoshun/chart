import './App.css';
import BarPlot from './components/BarPlot';
import BubblePlot from './components/BubblePlot';
import LinePlot from './components/LinePlot';
import PiePlot from './components/PiePlot';
import RadarPlot from './components/RadarPlot';

function App() {
  return (
    <div className='App'>
      <LinePlot />
      <BarPlot />
      <PiePlot />
      <RadarPlot />
      <BubblePlot />
    </div>
  );
}

export default App;
