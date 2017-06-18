import React from 'react';
import Functional1 from './Functional1'
// React 에서 컴포넌트를 정의 할 때는 보통 EcmaScipt 6 에 도입된 class 문법을 사용합니다.
// 컴포넌트에서 라이프사이클 API 를 사용해야 하거나,
// state 를 사용하는 경우에는 꼭 이렇게 정의를 해야하죠.
import Functional2 from './Functional2'
// 컴포넌트가 라이프사이클 API 도 사용하지 않고, state 도 사용하지 않고,
// 그냥 props 만 전달해주면 뷰를 렌더링만 해주는
// 역할이라면 함수형 컴포넌트 형식으로 컴포넌트를 정의 할 수 있습니다.
import Functional3 from './Functional3'
// ES6 의 화살표 함수를 사용해서 만들수도있습니다.
import Functional4 from './Functional4'
//비구조화 할당 (Object Destructuring) 문법을 사용


class App extends React.Component {
    render(){
        return (
          <div>
                <h1>Hello React Skeleton</h1>
                <Functional1 name="Functional-1" />
                <Functional2 name="Functional-2" />
                <Functional3 name="Functional-3" />
                <Functional4 name="Functional-4" />
          </div>
        );
    }
}

export default App;
