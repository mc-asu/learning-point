import React, { memo } from "react";
import { List, Paper } from "@material-ui/core";

import TodoListItem from "./TodoListItem";

const TodoList = memo(props => (
  <div>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {props.items.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={`TodoItem.${idx}`}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(idx)}
              onCheckBoxToggle={() => props.onItemCheck(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </div>
));

export default TodoList;
