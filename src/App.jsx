import "./index.css";
import AddWordPair from "./AddWordPair";
import FindWordPair from "./FindWordPair";

function App() {
  return (
    <div className="app">
      <h1 className="main-header">Sanakirjan käyttöliittymä</h1>
      <FindWordPair />
      <AddWordPair />
    </div>
  );
}

export default App;
