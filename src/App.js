import './App.css';

import Todos from './Todos';

function App() {
  const todos = ["Doctor Appointment", "10 min walk", "Grocery Shopping"];

  return (
    <div className="App">
      <Todos todos={todos} />
    </div>
  );
}

// cd jest-snapshot-demo

export default App;
