import React, { memo } from "react";
// Because we don’t want all these components to re-render unless it’s really necessary we’ll wrap them using memo helper from React.
import { Paper } from "@material-ui/core";

const TodoListLayout = memo(props => (
  <Paper
    elevation={0}
    style={{
      padding: 0,
      margin: 0
    }}
  >
    {props.children}
  </Paper>
));

export default TodoListLayout;
