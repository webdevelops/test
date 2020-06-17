import React, { /* useState */ } from 'react';
import { Navbar } from './components/Navbar';
import { TodoForm } from './components/TodoForm';

function App() {
  // const [todo, setTodo] = useState([]);

  return <>
    <Navbar />
    <div className="container">
      <TodoForm />
      <ul>
        {/* {todo.map((item, index) => {
          return (
            <li>
              item[index]
            </li>
          );
        })} */}
      </ul>
    </div>
  </>
}

export default App;
