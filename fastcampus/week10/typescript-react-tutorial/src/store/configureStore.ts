import modules from './modules';
import { createStore } from 'redux';

export default function configureStore() {
  const store = createStore(
    modules, /* preloadedState, */
    // window.__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    // window객체에는 이런게 없으니까 당연히 애러를 뿜는다.
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    // tslint.json에서 no-any의 값을 false로 바꿔준다.
  );
  return store;
}