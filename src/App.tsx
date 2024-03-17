// import component
import { Header, TodoForm, TodoList } from "./components/";

import { useState } from "react";

function App() {
  // hooks
  const [todoTitle, setTodoTitle] = useState("");

  // handler
  const handleTodoTitleChange = (todoTitle: string) => {
    setTodoTitle(todoTitle);
  };
  return (
    <>
      <Header />
      <TodoForm onTodoTitleChange={handleTodoTitleChange} />
      <TodoList todoTitle={todoTitle} />
    </>
  );
}

export default App;
