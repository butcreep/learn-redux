import React from "react";

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => [
    //e.target.value의 타입은 문자열이기 떄문에 숫자로 변환해야 한다
    onSetDiff(parseInt(e.target.value, 10))
  ];

  return (<div>
    <h1>{number}</h1>
    <div>
      <input type="number" onChange={onChange} value={diff} min="1"/>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  </div>);
}

export default Counter;
