import Count from './components/Count';
import './App.css';

function App() {
  return (
    <div className="App">
      <Count initial={1} stock={10}/>
    </div>
  );
}

export default App;
