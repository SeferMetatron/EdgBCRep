import "./App.css";
import { useReducer } from "react";
import ToDoList from "./components/ToDoList";
import Input from "./components/Input/Input";
import AddButton from "./components/Button/AddButton";
import DeleteButton from "./components/Button/DeleteButton";

let stateInitialValue = {
  todos: [],
  counter: 1,
};

function reducer(state, action) {
  let { type, payload } = action;
  let { todos, counter } = state;

  switch (type) {
    case "Add":
      {
        let id = counter;
        counter++;
        todos = [...todos, { ...todo, id: id }];
      }
      break;

    case "Delete":
      {
        todos = todos.filter((todo) => todo.id !== payload);
      }
      break;

    default:
      throw new Error();
  }

  return {
    ...state,
    todos: todos,
    counter: counter,
  };
}

let todo = {};

function App() {
  const [state, dispatch] = useReducer(reducer, stateInitialValue);

  const addTodos = () => {
    dispatch({ type: "Add" });
  };

  const deleteTodos = (id) => {
    dispatch({ type: "Delete", payload: id });
  };

  const handleInputChange = (e) => {
    todo[e.target.name] = e.target.value;
  };

  return (
    <div className="container">
      <div>
        <h1>C'amaffari</h1>
      </div>
      <Input onChange={handleInputChange}>
        <AddButton onClick={addTodos}>+</AddButton>
      </Input>

      <div className="todos">
        {state.todos.map((todo, index) => {
          let { id } = todo;
          return (
            <ToDoList todo={todo} key={`todo-${index}`}>
              <DeleteButton onClick={() => deleteTodos(id)}>X</DeleteButton>
            </ToDoList>
          );
        })}
      </div>
    </div>
  );
}

export default App;
