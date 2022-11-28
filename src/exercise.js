import { createStore } from "redux";

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

const INCREASE = "INCREASE";
const DECEASE = "DECEASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

function increase() {
  return {
    type: INCREASE,
  };
}

const decrease = () => ({
  type: DECEASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECEASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);
console.log('스토어',store.getState);//store 안에 들어있는 상태를 조회

// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener함수
const listener=()=>{
  const state = store.getState()
  console.log(state)
}

// 구독해제
const unsubscribe = store.subscribe(listener)

store.dispatch(increase())
store.dispatch(decrease())
store.dispatch(changeText('Hi'))
store.dispatch(addToList({id:1,text:'Wow'}))