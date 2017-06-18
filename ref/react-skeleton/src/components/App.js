import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div>
        <h1>Hello React Skeleton</h1>
        <RefCallBack1/>
        <RefCallBack2/>
      </div>
    );
  }
}

class RefCallBack1 extends React.Component {
  render() {
    return (
      <div>
        <input ref={ref => this.input = ref}>
        </input>
      </div>
    )
  }

  componentDidMount() {
    this.input.value = "I used ref to do this";
    console.log(this.input); // ref에는 자기 자신이 온다.
    console.log(this.refs);
  }
}
class RefCallBack2 extends React.Component {
    handleClick() {
    	  this.textBox.input.value = "I used ref";
        console.log(this.textBox);
        //  ref 를 통하여 input 의 값을 변경합니다
    }
    render() {
  	    return (
      	    <div>
          	    <TextBox ref={(ref)=>{this.textBox = ref}}/>
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        )
        /* Hello 컴포넌트에서 TextBox 컴포넌트의 ref 를 this.textBox 로 지정하고 */
    }
}

class TextBox extends React.Component {
    render() {
        return(
        	<input ref={ref => this.input = ref}>
          </input>
        )
        /* LINE 19: TextBox 컴포넌트의 input 박스의 ref를 this.input으로 지정하였으며 */
    }
}



export default App;
