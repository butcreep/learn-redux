import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer() {
  // useSelector 에서 꼭 객체를 반환 할 필요는 없습니다.
  // 한 종류의 값만 조회하고 싶으면 그냥 원하는 값만 바로 반환하면 됩니다.
  const todos = useSelector((state) => state.todos);
  console.log('뭔데이거',todos) // 원본 state
  const dispatch = useDispatch();

  const onCreate = (text) => dispatch(addTodo(text));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onToggle = useCallback((id) => dispatch(toggleTodo(id), [dispatch])); //최적화
  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

export default TodosContainer;
