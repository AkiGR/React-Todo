import React, { useState } from "react";

// style
import { UnorderedList, ListItem, Box } from "@chakra-ui/layout";

// interface
interface todoTitleProps {
  todoTitle: string;
}

export const TodoList: React.FC<todoTitleProps> = ({ todoTitle }) => {
  // hooks
  const [todoList, setTodoList] = useState<string[]>([]);

  // function
  const addTodo = () => {
    setTodoList((prevTodoList) => [...prevTodoList, todoTitle]);
  };

  // useEffect
  React.useEffect(() => {
    if (todoTitle !== "") {
      addTodo();
    }
  }, [todoTitle]);

  return (
    <Box>
      <UnorderedList margin={"auto"} width={"fit-content"}>
        {todoList.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};
