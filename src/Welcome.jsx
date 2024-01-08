import { useContext } from "react";
import { todoItemsContext } from "./store/todoListItem";

function Welcome() {
  const { newTodo } = useContext(todoItemsContext);

  return (
    <div>{newTodo.length === 0 && <h1>Enjoy Your Day Babes...!!!!</h1>}</div>
  );
}

export default Welcome;
