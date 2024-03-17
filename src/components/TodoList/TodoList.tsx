import React from "react";

// style
import { UnorderedList, ListItem, Box } from "@chakra-ui/layout";

// interface
interface todoTitleProps {
  todoTitle: string;
}

export const TodoList: React.FC<todoTitleProps> = ({ todoTitle }) => {
  return (
    <Box>
      <UnorderedList margin={"auto"} width={"fit-content"}>
        <ListItem>{todoTitle}</ListItem>
      </UnorderedList>
    </Box>
  );
};
