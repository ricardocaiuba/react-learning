import React, { Component, useState } from "react";

const TodoList = () => {
  const [listTodo, setListTodo] = useState([]);
  const [conteudo, setConteudo] = useState({});

  const handleClick = () => {
    const lista = listTodo;
    lista.push({ value: conteudo });
    setListTodo(lista);
    setConteudo("");
  };

  return (
    <div>
      <input
        type="text"
        value={conteudo.FirstName}
        onChange={(e) => {
          let obj = {
            FirstName: e.target.value,
          };
          setConteudo(obj);
        }}
      />
      <input
        type="text"
        value={conteudo.LastName}
        onChange={(e) => {
          let obj = {
            LastName: e.target.value,
          };
          setConteudo(obj);
        }}
      />
      <button onClick={handleClick}>Listar</button>
      {listTodo.map((element, index) => {
        return <li key={index}>{element.value}</li>;
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
