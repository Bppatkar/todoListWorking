import { useRef } from "react";
import { useContext } from "react";
import { todoItemsContext } from "./store/todoListItem";

function Form() {
  const todoItemRef = useRef(null);
  const todoDateRef = useRef(null);
  const { addNewItem } = useContext(todoItemsContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addNewItem(todoItemRef.current.value, todoDateRef.current.valueAsDate);

        todoItemRef.current.value = "";
        todoItemRef.current.focus();
        todoDateRef.current.value = "";
      }}
    >
      <input type="text" placeholder="Enter Your Task Here" ref={todoItemRef} />
      <input type="date" ref={todoDateRef} />
      <button>ADD</button>
    </form>
  );
}

export default Form;
