import { createAction, handleActions } from 'redux-actions';

const INCREMENT: string = 'counter/INCREMENT';
const DECREMENT: string = 'counter/DECREMENT';

// actionsCreators를 Object로써 반환하는데 이는 실제 사용하면서 왜 그런지 알 수 있을것임.
// 타입지원을 위해 다음과 같이 export히여 사용한다.
export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT),
};

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

export default handleActions<CounterState>(
  {
    [INCREMENT]: (state) => ({ value: state.value + 1 }),
    [DECREMENT]: (state) => ({ value: state.value - 1 }),
  }, 
  initialState
);