import "./App.css";
import TermekekAdmin from "./components/admin/TermekekAdmin";
import TermekUrlapAdmin from "./components/admin/TermekUrlapAdmin";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>FakeStore</h1>
      </header>
      <section>
        <TermekUrlapAdmin />
      </section>
      <article>
        <TermekekAdmin />
      </article>
    </div>
  );
}

export default App;
