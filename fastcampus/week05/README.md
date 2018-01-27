# HOC 에 대한 개념에 대해.

실습 : 초기에 객체가 만들어지면, dom 객체가 그려지기 전에 요청을 보내서 상태값에 응답을 저장한다.
그리고 렌더링시에 상태값에 있는 값을 이용해 상태값을 렌더링때에 이용하는것을 만들것인데, 이 기능은 대부분의 컴포넌트에 
충분히 사용될 수 있는 부분이며, 이 부분은 여러번 사용될 수 있다. HOC의 개념을 이 때에 저장할 수 있을것이다.

만들 것, https://gist.github.com/velopert/3bdd08cb135587ffc481102c38134f6d
예제 코드, https://codesandbox.io/s/134ypjk10l

# 리덕스 로거

리덕스 로거 : https://logrocket.com/ 완벽한 로거 같은 느낌이지만 ..

webpack에서 LoggerObject를 상속해서 커스터마이징 할 수 도 있다. 


# 리덕스 미들웨어

배울 라이브러리 : redux-thunk, redux-promise, middleware, redux-pender(velopert의 미들웨어)
알아볼 만한 라이브러리 : RXjs, [redux-saga](https://orezytivarg.github.io/from-redux-thunk-to-sagas/)

- 액션이 리듀서한태 가기전에, 그 사이에 어떤 작업을 해야할 때에는 리덕스의 미들웨어부분에서 처리해야한다.
- 리덕스에서 리듀서는 모든 함수가 순수해야 한다. 같은 입력값을 넣으면 항상 같은 결과물을 내보낼 수 있는 순수함수여야만 한다.


순수함수 리듀서의 조건
- 상태와 똑같은 액션을 요청했을때, 서버가 어떤 상태에 따라 어떤 결과물을 나타내는가. 같은것들은 순수하지 않은 함수이다.
- 랜덤 숫자, new Date
- 컴포넌트에서 할 수 있지만, 미들웨어에서 하는것이 관리가 쉽고 더 깔끔하게 로직분리가 될 것이다.

# 미들웨어를 직접 작성하는 일은 실무에서 많이 작성하는 일은 없음..

# redux-thunk

redux-thunk 는 리덕스 만든 사람이 만든 것. 비동기 작업할 때 이걸로 해! 라고 하며 던져준 것.

함수형태의 액션으로 무언가를 디스패치 할 수 있게 하는것...

https://github.com/gaearon/redux-thunk/blob/master/src/index.js

``` js  index.js
// 이게 소스 전부이다.
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => { // dispatch, getState, next, action 4개의 파라메터가 가용되며
    if (typeof action === 'function') { //  함수의 중첩은 3개 씩이나 중첩 된다. 
      return action(dispatch, getState, extraArgument); 
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;
```

redux middleware는 왜 함수를 중복해서 사용할까?

action이 함수 형태면. dispatch와 getState와 별도의 arguments를 넣어서 호출 해준다.

thunk라는 뜻은 const foo => 1 + 2 
라는 함수가 있을때 foo자체는 ()가 실행되기 전까지는 값이 반환되지 않는다. 이 상황을 바로 thunk라고 한다.


어떠한 html5라이브러리를 사용하려고하는데 action으로 관리하고 싶을 때, ex) 사용자가 채팅을 안보고있을 때, 소리로써 알려주는 기능을 만들떄에 html5 api를 redux-thunk를 이용해서 사용했다. redux-thunk는 함수를 actions으로 사용하고 싶을 때, 유용하다. 

# redux-promise-middleware 

웹 요청, 응답, 관리에있어서 편리하게 이용해보자.
redux-thunk로 매 요청마다, 대기중, 성공, 실패에 대한 매 처리가 너무 귀찮기 때문에 만들어진 라이브러리 redux-promise-middleware를 이용합니다.
