import React, { Fragment } from "react";

import TodoList, { Message } from "./component/todoList";

const App = () => {
  return (
    <>
      <Message msg="Lista" />
      <br />
      <TodoList />
    </>
  );
};

export default App;
