import logo from './logo.svg';
import './App.css';
import JokeRetrieval from './JokeRetrieval';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <JokeRetrieval />
      </header>
    </div>
  );
}

export default App;
