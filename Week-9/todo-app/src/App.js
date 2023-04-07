import './App.css';
import Form from './components/Form/Form';
import TodoList from './components/List/TodoList';

function App() {
  return (
    <div className="App">
       <h1 style={{color:'white'}}className="text-3xl font-bold white">
        Todo App
      </h1>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
