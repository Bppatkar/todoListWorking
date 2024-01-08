import { createContext,useReducer  } from "react";

export const todoItemsContext = createContext({
  newTodo: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

function todoItemReducer(state, action) {
  // console.log("Reducer action:", action);
  let newTodoItem = state;

  if (action.type === "new_item") {
    newTodoItem = [
      ...newTodoItem,
      { name: action.payload.itemName, date: action.payload.itemDate },
    ];
  } else if (action.type === "deleted_item") {
    newTodoItem = state.filter(
      (todo) => todo.name !== action.payload.itemName.name
    );
  }
  return newTodoItem;
}

const TodoItemContextProvider = ({ children }) => {
  const [newTodo, dispatchNewTodo] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDate) => {
    const newtodoItemAction = {
      type: "new_item",
      payload: { itemName, itemDate },
    };
    dispatchNewTodo(newtodoItemAction);
  };

  const deleteItem = (todoItemName) => {
    // console.log("Deleting item:", todoItemName);
    const deletedItemAction = {
      type: "deleted_item",
      payload: { itemName: todoItemName },
    };
    dispatchNewTodo(deletedItemAction);
  };

  return (
    <todoItemsContext.Provider
      value={{
        newTodo,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </todoItemsContext.Provider>
  );
};
export default TodoItemContextProvider;
