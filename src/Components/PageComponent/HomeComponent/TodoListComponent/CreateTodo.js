import React, { memo } from "react";
import {
  TextField,
  Paper,
  IconButton,
  InputAdornment
} from "@material-ui/core";
import LibraryAdd from "@material-ui/icons/LibraryAdd";

const CreateTodo = memo(props => (
  <Paper style={{ padding: 10, backgroundColor: "orange" }}>
    <TextField
      id="outlined-adornment-todo"
      label="Create a new todo"
      variant="outlined"
      value={props.inputValue}
      onChange={props.onInputChange}
      onKeyPress={props.onInputKeyPress}
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="Create Todo" onClick={props.onButtonClick}>
              <LibraryAdd />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  </Paper>
));

export default CreateTodo;
