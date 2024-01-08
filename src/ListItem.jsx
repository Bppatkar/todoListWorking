import { useContext } from "react";
import { todoItemsContext } from "./store/todoListItem";

function ListItem() {
  const {deleteItem ,newTodo } = useContext(todoItemsContext);
 
  return (
    <div>
      <ul>
        {newTodo.map((todo, i) => (
          <li key={i}>
            {todo.name} {new Date(todo.date).toLocaleDateString("en-US")}
            <span>
              <button onClick={() => deleteItem(todo)}>Remove</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItem;
