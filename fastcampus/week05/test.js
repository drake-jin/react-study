const INCREMENT_COUNTER = 'INCREMENT_COUNTER';

function increment() {
  return {
    type: INCREMENT_COUNTER
  };
}

function incrementAsync() {
  return dispatch => { // dispatch 를 파라미터로 가지는 함수를 리턴합니다.
    setTimeout(() => {
      // 1 초뒤 dispatch 합니다
      dispatch(increment());
    }, 1000);
  };
}

incrementAsync()()