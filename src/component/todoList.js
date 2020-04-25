import React, { Component, useState } from "react";

const TodoList = () => {
  const DEFAULT_STATE = {
    firstName: "",
    lastName: "",
  };
  const [listTodo, setListTodo] = useState([]);
  const [state, setState] = useState(DEFAULT_STATE);

  const handleChange = (field) => (event) => {
    setState({
      ...state,
      [field]: event.target.value,
    });
  };

  const handleClick = () => {
    const lista = listTodo;
    lista.push({
      firstName: state.firstName,
      lastName: state.lastName,
    });
    setListTodo(lista);
    setState(DEFAULT_STATE);
  };

  return (
    <div>
      <input
        type="text"
        value={state.firstName}
        onChange={handleChange("firstName")}
      />
      <br />
      <input
        type="text"
        value={state.lastName}
        onChange={handleChange("lastName")}
      />
      <br />
      <button onClick={handleClick}>Listar</button>
      {listTodo.map((element, index) => {
        return (
          <li key={index}>
            {element.firstName} {element.lastName}
          </li>
        );
      })}
    </div>
  );
};

export class Message extends Component {
  render() {
    const { msg } = this.props;

    return <h1>{msg}</h1>;
  }
}

export default TodoList;
