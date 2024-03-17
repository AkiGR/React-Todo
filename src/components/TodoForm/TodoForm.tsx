import React from "react";

// style
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

export const TodoForm: React.FC = () => {
  return (
    <>
      <Input placeholder="Todo title" />
      <Button color="#81A1C1">Add todo</Button>
    </>
  );
};
