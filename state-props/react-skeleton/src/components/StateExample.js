import React from 'react';

class StateExample extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      header: "Header Initial state",
      content: "Content Initial State",
      count:0
    };
    //state 의 초기 값을 설정 할 때는 constructor(생성자) 메소드에서 this.state= { } 를 통하여 설정합니다.
  }

  updateHeader(text){
    console.log(text);
    this.setState({
      header: `Header has changed [${this.state.count}]`,
      count:this.state.count+1
    });
  }

  render() {
    return (
      <div>
      <h1>{this.state.header}</h1>
      <h2>{this.state.content}</h2>
      <button onClick={this.updateHeader.bind(this)}>Update</button>
      </div>
    );
  }
}

export default StateExample
