import React, { memo } from "react";

import { useInputValue, useTodos } from "./TodoListComponent/custom-hooks";
import CreateTodo from "./TodoListComponent/CreateTodo";
import TodoList from "./TodoListComponent/TodoList";
import TodoListLayout from "./TodoListComponent/TodoListLayout";

const TodoListComponent = memo(props => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();

  const clearInputAndAddTodo = _ => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <TodoListLayout>
      <CreateTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={event => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList
        items={todos}
        onItemCheck={idx => checkTodo(idx)}
        onItemRemove={idx => removeTodo(idx)}
      />
    </TodoListLayout>
  );
});

export default TodoListComponent;
