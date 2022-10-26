import Form from './components/Form';
import './App.css';
import {React,useState} from 'react';
import Todolist from './components/Todolist';

function App() {
  const [inputText,setInputText] = useState("")
  const [todos,setTodos] =useState([])
  return (
    <div >
      <header>
        <h1>Charles Todo List</h1>
      </header>

     <Form inputText={inputText} todos={todos}setTodos={setTodos} setInputText={setInputText}/>
     <Todolist setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
