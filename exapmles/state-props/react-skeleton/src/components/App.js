import React from 'react';
import Header from './Header';
import Content from './Content';
import StateExample from './StateExample';
import RandomNumber from './RandomNumber';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value: Math.round(Math.random()*100)
    };
    // 초기 state 를 설정합니다.
    this.updateValue = this.updateValue.bind(this); //props 에 접근할 수 있도록
  }

  updateValue(randomValue){
    this.setState({
        value: randomValue
    });
}



  render(){
    return (
      /*
      <div>
      <Header/>
      <Content/>
      </div>
      */
      <div>
        <Header
          title={ this.props.headerTitle } />
        <Content
          title={ this.props.contentTitle }
          body={ this.props.contentBody } />

        <hr/>

        <h3>State Example </h3>
        <StateExample />

        <hr/>

        <h3> RandomNumber</h3>
        <RandomNumber
          number={this.state.value}
          onUpdate={this.updateValue} />
      </div>


    );
  }
}
App.defaultProps = {
  headerTitle: 'Default header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
};

/*
App.defaultProps = {
headerTitle: 'Default header',
contentTitle: 5,    // Content 에서 string 만 받는다고 했는데 5를 줌
contentBody: undefined // Content 에서 String 이 반드시 필요하다 했는데 undefined
};
*/


export default App;
