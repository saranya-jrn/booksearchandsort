import "./App.css";
import BooksDisplay from "./components/BooksDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Book Collection</h1>
        <p className="App-subtitle">Discover your next favorite read</p>
      </header>
      <BooksDisplay />
    </div>
  );
}

export default App;
