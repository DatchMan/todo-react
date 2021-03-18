import "./styles.css";
import React, { useState } from "react";
import { InputTodo } from "./components/InputTodo";
import { IncomTodo } from "./components/IncomTodo";
import { ComTodo } from "./components/ComTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodo, setIncompleteTodo] = useState([]);
  const [completeTodo, setCompleteTodo] = useState([]);
  const onChangeText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodo = [...incompleteTodo, todoText];
    setIncompleteTodo(newTodo);
    setTodoText("");
  };
  const onClickDel = (index) => {
    const newTodo = [...incompleteTodo];
    newTodo.splice(index, 1);
    setIncompleteTodo(newTodo);
  };
  const onClickCom = (index) => {
    const newIncomTodo = [...incompleteTodo];
    newIncomTodo.splice(index, 1);

    const newComTodo = [...completeTodo, incompleteTodo[index]];
    setIncompleteTodo(newIncomTodo);
    setCompleteTodo(newComTodo);
  };
  const onClickBack = (index) => {
    const newComTodo = [...completeTodo];
    newComTodo.splice(index, 1);

    const newIncomTodo = [...incompleteTodo, completeTodo[index]];
    setIncompleteTodo(newIncomTodo);
    setCompleteTodo(newComTodo);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeText}
        onClick={onClickAdd}
        disabled={incompleteTodo.length >= 5}
      />
      {incompleteTodo.length >= 5 && (
        <p style={{ color: "red" }}>登録できるのは5個までや。消化しろや。</p>
      )}

      <IncomTodo
        todo={incompleteTodo}
        onClickCom={onClickCom}
        onClickDel={onClickDel}
      />
      <ComTodo todo={completeTodo} onClickBack={onClickBack} />
    </>
  );
};
