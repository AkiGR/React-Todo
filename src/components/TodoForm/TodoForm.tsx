import React, { useState } from "react";

// style
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { HStack } from "@chakra-ui/layout";

// interface
interface TodoTitleProps {
  onTodoTitleChange: (todoTitle: string) => void;
}

export const TodoForm: React.FC<TodoTitleProps> = ({ onTodoTitleChange }) => {
  // hooks
  const [todoTitle, setTodoTitle] = useState("");

  // handler
  const handleTodoTitleChange = (event: any) => {
    setTodoTitle(event.target.value);
  };

  // onClick
  const onAddTodo = () => {
    onTodoTitleChange(todoTitle);
    setTodoTitle("");
    console.log("button click");
  };

  return (
    <HStack alignItems={"center"} width={"auto"} justifyContent={"center"}>
      <Input
        placeholder={"Todo title"}
        onChange={handleTodoTitleChange}
        value={todoTitle}
      />
      <Button color="#81A1C1" onClick={onAddTodo}>
        Add todo
      </Button>
    </HStack>
  );
};
