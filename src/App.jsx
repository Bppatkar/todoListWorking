import { createContext, useReducer } from "react";
import Form from "./Form";
import Heading from "./Heading";
import ListItem from "./ListItem";
import Welcome from "./Welcome";
import "./App.css";
import TodoItemContextProvider from "./store/todoListItem";

function App() {
  return (
    <TodoItemContextProvider>
      <center>
        <Heading />
        <Form />
        <Welcome> </Welcome>
        <ListItem />
      </center>
    </TodoItemContextProvider>
  );
}

export default App;
