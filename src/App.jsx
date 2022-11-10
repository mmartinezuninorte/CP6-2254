import './App.css'
import {TodoList} from './components/TodoList'
import { useState } from 'react'

function App() {
  onAdd = ()=>{}
  const [contador, setContador] = useState(100)
  return (
    <div className="App">
      <h1>Lista de Pendientes</h1>
      <TodoList/>

      <h1>Contador</h1>
      <p>{contador}</p>
      <button onClick={onAdd}>+</button>
    </div>
  );
}

export default App
