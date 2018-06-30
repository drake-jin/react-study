import { Record, List } from 'immutable';
import { createAction, handleActions, Action } from 'redux-actions';
/*
immutable과 typescript의 조합은 대단한데, todoList예제를 통해서 대단한점이 무엇인지 알아보자.

Action은 typeScript에서 사용하는 타입을 가져온다.

immutable.js를 사용할때에는 Map을 쓰지않고 Record를 쓴다.
*/

const CREATE = 'todos/CREATE';
const REMOVE = 'todos/REMOVE';
const TOGGLE = 'todos/TOGGLE';
const CHANGE_INPUT = 'todos/CHANGE_INPUT';

type CreatePayload = string; // type alias라고도 불리며, 간단하게 지정할 수 있다.
type RemovePayload = number;
type TogglePayload = number;
type ChangeInputPayload = string;

/* type AnotherPayload = { // 만약 페이로드 형태가 복잡하다면 이 부분대로 작성하면 된다.
  something: string; // 또는 하나의 변수가 아닌 객체가 들어가게 될 경우에...
  like: number;
  this: boolean
}; */

export const actionCreators = {
  create: createAction<CreatePayload>(CREATE),
  remove: createAction<RemovePayload>(REMOVE),
  toggle:  createAction<TogglePayload>(TOGGLE),
  changeInput: createAction<ChangeInputPayload>(CHANGE_INPUT)
};

const TodoItemRecord = Record({
  id: 0,
  text: '',
  done: false
});

interface TodoItemDataParams {
  id?: number;
  text?: string;
  done?: boolean;
}

export class TodoItemData extends TodoItemRecord {
  static autoId = 0; // autoId란 값이 존재하고 constructor에 선언되어있어, 만들어질때 마다 새로 더해진다.
  id: number;
  text: string;
  done: boolean;
  constructor(params?: TodoItemDataParams) {
    const id = TodoItemData.autoId;
    if (params) {
      super({
        ...params,
        id,
      });
    } else {
      super({ id });
    }
    TodoItemData.autoId = id + 1;
  }
}

const TodosStateRecord = Record({
  todoItems: List(),
  input: ''
}); // Record는 Map과는 다르게 Map.get('':string) 이렇게 찾아야하지만 
// Record는 Map.a 이렇게 찾을 수 있다.
// 이것은 일종의 Factory같은 생성함수를 만드는것이다.
// 

export class TodosState extends TodosStateRecord {
  todoItems: List<TodoItemData>;
  input: string;
}

const initialState = new TodosState();

// handleActions<TodosState, any> 에서 any의 이유는 액션의 파라메터 형태가 어떤 형태로 들어올지 예측할 수 없어서.
export default handleActions<TodosState, any>(
  {
    [CREATE]: (state, action: Action<CreatePayload>): TodosState => {
      return <TodosState> state.withMutations( // immutables에서 withMutations의 경우는 많은 값을 변경할때, 
        // withMutations를 쓰며, 생각보다 많지 않을때에는 .set.set.set을 이용한다.
        s => {
          s.set('input', '')
          .update('todoItems', (todoItems: List<TodoItemData>) => todoItems.push(
            new TodoItemData({ text: action.payload })
          ));
        }
      );
    },
    [REMOVE]: (state, action: Action<RemovePayload>): TodosState => {
      return <TodosState> state.update(
        'todoItems',
        (todoItems: List<TodoItemData>) => todoItems.filter(
          t => t ? t.id !== action.payload : false
          // t ? t.id !== ~~~ 이렇게 하는 이유는 마우스 커서를 t에다가 올리거나 삼항연산자를 취소해버린다면 메시지가 나타난다.
          // undefined일 수 도 있다...
        )
      );
    },
    [TOGGLE]: (state, action: Action<TogglePayload>): TodosState => {
      const index = state.todoItems.findIndex(t => t ? t.id === action.payload : false);
      return <TodosState> state.updateIn(['todoItems', index, 'done'], done => !done);
    },
    [CHANGE_INPUT]: (state, action: Action<ChangeInputPayload>): TodosState => {
      return <TodosState> state.set('input', action.payload);
      // state.set의 결과값은 Map이 나오게 되는데 이 때에 결과값이 TodoState라고 알리기 위해 type assertion을 하는것이다.
    },
  },
  initialState
);