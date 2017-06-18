import React from 'react';
import ReactDOM from 'react-dom';

/*
유동적인 데이터를 렌더링하며, parent 컴포넌트와 communicate 하는 예제 컴포넌트 RandomNumber 를 만들어봅시다.
RandomNumber.js

*/
class RandomNumber extends React.Component {
  constructor(props){
    super(props);
    this.updateNumber = this.updateNumber.bind(this);
    //React 컴포넌트의 생성자입니다. super(props) 로 상속받은 React.Component 의 생성자 메소드를 실행 한 후,
    //저희가 입력한 코드를 실행합니다..  update 메소드에서 this.props 에 접근 할 수 있도록 binding 을 해줍니다.
  }

  updateNumber(){
    let value = Math.round(Math.random()*100);
    this.props.onUpdate(value);
    //props 로 받은 함수를 실행합니다
  }

  render(){
    return (
      <div>
        <h1>RANDOM NUMBER: { this.props.number }</h1>
        <button onClick={this.updateNumber}>Randomize</button>
      </div>
    );
  }

  /*
RandomNumber Component 로 들어온 2개의 props 변수

1. number: 랜덤 값
2. onUpdate: function 형태의 prop 으로서, parent 컴포넌트에 정의된 메소드를 실행 할 수 있게 합니다.

  */
}

export default RandomNumber;
