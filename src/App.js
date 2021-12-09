import './App.css';
import { Person } from './components/Person';
import { ClickCounter } from './components/ClickCounter';

function App() {
  const person={
    firstName:'Rajibul',
    lastName:'Hasan'
  }
  return (
    <div className="App">
      <h1>This is error Handler</h1>
      <Person person={person}/>
      <ClickCounter/>
    </div>
  );
}

export default App;
