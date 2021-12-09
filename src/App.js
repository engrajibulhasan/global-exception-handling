import "./App.css";
import { Person } from "./components/Person";
import { ClickCounter } from "./components/ClickCounter";
import { ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  const person = {
    firstName: "Rajibul",
    lastName: "Hasan",
  };
  return (
    <div className="App">
      <ErrorBoundary>
        <h1>This is error Handler</h1>
        <Person person={person} />
        <Person person={{}} />
        <ClickCounter />
      </ErrorBoundary>
    </div>
  );
}

export default App;
