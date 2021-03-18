import React from "react";

export const IncomTodo = (props) => {
  const { todo, onClickCom, onClickDel } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div key={todo}>
              <li>{todo}</li>
              <button onClick={() => onClickCom(index)}>完了</button>
              <button onClick={() => onClickDel(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
