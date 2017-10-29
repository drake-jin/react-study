# 참고주소

https://velopert.com/3358

# Ducks 구조
Ducks 구조에는 Reducer 파일 안에 액션타입과 액션생성자 함수를 함께 넣어서 관리하고 이를 '모듈' 이라 부른다.


**예제)**
``` js
// widgets.js

// Actions
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
```

최 상단에 액션 타입을 정의하고, 리듀서를 정의하여 export default로 내보내고, 같은 파일에서 액션생성자도 export를 통해 내보냅니다.

이 패턴에서 따를 규칙은, 액션타입을 만들때
npm-module-or-app/reducer/ACTION_TYPE의 형식으로 만들어야 합니다.

만약에 npm모듈을 만드는게 아니라면 reducer/ACTION+_TYPE의 형식으로 만들어도 됩니다. 이렇게 접두사를 달아주는 이유는, 서로 다른 리듀서에서 이름이 중첩되는것을 방지하기 위함입니다.

그리고, 리듀서를 만들때는 export default로 내보내고, 액션생성자는 export로 내보내 주어야 합니다.

ducks구조에서 준수해야할 규칙은 이게 전부입니다.

# redux-actions를 통한 더 쉬운 액션관리

redux-actions 패키지에는 리덕스의 액션들을 관리하기 위한 유용한 createAction과 handleActions 가 있습니다.

### createAction을 통한 액션생성 자동화
리덕스에서, 액션을 만들다보면 드는 의문이, 이걸 굳이 하나하나 액션생성자를 만들어야하나? 입니다.
예를들어 increment, decrement코드를 보면 

``` js
export const increment = (index) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});
```
이 부분을 날 코딩해서 자동화해서 작성할 수 있을것입니다.

``` js

export const increment = createAction(INCREMENT,args)
export const decrement = createAction(DECREMENT,args)

function createAction({type,...args}){
  return ({type,args})
}
```

하지만 이 부분은 react-redux에서 createAction 이라는 메서드로 간단하게 제공하기도 합니다. 
앞으로는 이것을 이용할 것 입니다.

``` js
export const increment = createAction(types.INCREMENT);
export const decrement = createAction(types.DECREMENT);
```

하지만, react-redux에서 제공하는 createAction을 이용하면 파라메터값이 뭐가 올지 알 수 없을겂니다.
파라메터로 전달받은 값을 액션의 payload값으로 설정해줍니다. 따라서 increment(3)이 실행된다면 다음과 같이 객체를 만들어주게 됩니다.

``` js
{
  type:'INCREMENT',
  payload: 5
}
``` 

setColor의 경우에는 
``` js
export const setColor = createAction(types.SET_COLOR);
```
```js
setColor({index:5, color: '#fff'})
// 결과 
/*
{
  type: 'SET_COLOR',
  payload: {
    index: 5,
    color: '#fff',
  }
}
*/
```

즉, 액션이 갖고있을 수 있는 변수를 payload로 통일함으로써 액션을 생성하는 것을 자동화 할 수 있게 됩니다.
편리하지만, 단점으로 코드를 봤을때, 해당 액션생성자가 파라미터로 필요한 값이 뭔지 모르기때문에, 위에 주석을 작성해주어야 합니다.


### switch 문 대신 handleActions 사용하기

리듀서에서 액선의 type에 따라 다른 작업을 하기 위해서 switch문을 사용했었는데, 이 방식에는 중요한 결점이 있습니다.
바로 scope 가 리듀서 함수로 설정되어 있는것 입니다. 그렇기 때문에 다른 case에서 let이나 const를 통하여 변수를 선언하려고 보면 같은 이름이 중첩되어 변수 네이밍에 문제가 생기게 됩니다.

이 문제를 해결해주는것이 바로 handleActions 입니다. 

``` js
const reducer = handleActions({
  INCREMENT: (state, action) => ({
    counter: state.counter + action.payload,
  }),
  DECREMENT: (state, action) => ({
    counter: state.counter - aciton.payload,
  }),
}, { counter: 0})

/*
handleActions(param1, param2)

param1 object 액션에 따라 실행 할 함수들을 가지고 있는 객체
param2 object 상태의 기본값(initialState)를 넣어준다.
*/
```
