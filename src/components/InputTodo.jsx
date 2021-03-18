import React from "react";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  const style = {
    backgroundColor: "#c1ffff",
    widows: "400%",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
  };
  return (
    <div style={style} className="input-area">
      <input
        disabled={disabled}
        placeholder="todoを入力"
        value={todoText}
        onChange={onChange}
      />
      <button disabled={disabled} onClick={onClick}>
        入力
      </button>
    </div>
  );
};
