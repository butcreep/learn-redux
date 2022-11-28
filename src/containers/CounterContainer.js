import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook 입니다
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일합니다.

  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff
  }),
  shallowEqual
  );

  //최적화 방법 1 : useSelector를 여러번 사용한다
  //const number = useSelector(state => state.counter.number);
  //const diff = useSelector(state => state.counter.diff);

  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
