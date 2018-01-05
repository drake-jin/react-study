/*
이제 리듀서를 만들 차례입니다. 
복습을 하자면, 리듀서는 액션의 type에 따라 변화를 일으키는 함수입니다. 

그리고, 이 리듀서 파일에는 최초변화를 일으키기전, 지니고있어야 할 초기상태가 정의되어야 하죠.

리듀서 함수는 state 와 action 을 파라미터로 가지는 함수이며, 그 내부에서 switch 문을 통하여 action.type 에 따라 상태에 다른 변화를 일으키면 됩니다.
여기서 주의하실점은, 

    state 를 직접 수정하면 절대 안되고, 기존 state 값에 덮어쓴 새 상태객체를 만드는 방식으로 해야합니다.


지금까지 우리가 이전 프로젝트들 (투두리스트, 주소록) 에서 state 내부의 객체를 다뤘었던것 처럼요.


*/

import color from './color'
import number from './number'

import { combineReducers } from 'redux'

/* 
    리듀서 함수를 정의합니다. 리듀서는 state 와 action 을 파라미터로 받습니다.
    state 가 undefined 일때 (스토어가 생성될때) state 의 기본값을 initialState 로 사용합니다.
    action.type 에 따라 다른 작업을 하고, 새 상태를 만들어서 반환합니다.
    이 때 주의 할 점은 state 를 직접 수정하면 안되고,
    기존 상태 값에 원하는 값을 덮어쓴 새로운 객체를 만들어서 반환해야합니다.
*/

/*
    서브 리듀서들을 하나로 합칩니다.
    combineReducers 를 실행하고 나면, 나중에 store의 형태가 파라미터로 전달한 객체의 모양대로 만들어집니다.
    지금의 경우:
    {
        numberData: {
            number: 0
        },
        colorData: {
            color: 'black'
        }
    }
    로 만들어집니다.
*/

const reducers = combineReducers({
  numberData: number,
  colorData: color
});

export default reducers