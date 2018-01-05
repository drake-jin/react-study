import React from 'react';
// ES6 에 도입된 새로운 문법인데, var React = require(‘react’) 와 같습니다. React 모듈은 Component를 만들때 사용됩니다.

class App extends React.Component {
  // class : class 개념 역시 ES6 에 새로 도입된 요소중 하나 입니다.
  // 모든 Component는 React.Component 를 상속합니다.

  sayHey(){
    alert("sayHo!");
  }
  render(){
    // render() 메소드에서는 컴포넌트에 렌더링 될 데이타를 정의합니다.
    let text = "꾸꾸까까";
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={this.sayHey}> click me </button>
      </div>
      /*
      //를 통해 버튼이 클릭되면 해당 메소드가 실행되게 할 수 있습니다.  () 가 뒤에 안붙어있다는점을 주의해주세요. 만약에 () 가 붙으면 페이지가 로드 될때도 실행되고, 클릭할때도 실행됩니다.

      이 부분이 JSX의 가장 중요한 부분입니다. 보시면, 자바스크립트에서 html 태그를 반환하는데, 따옴표같은건 없죠?
      React JSX 는 XML-like Syntax 를 native Javascript로 변환해줍니다.
      따라서 ” ” 로 감싸지 않는 점 주의하시구요, ( ) 를 사용하지 않아도 오류는 발생하지 않지만 가독성을 위하여 사용하는것이 좋습니다.

      render 에 return 할 JSX 는 반드시 부모 하나에 의해 감싸져야 한다.

      JSX 안에서 사용되는 JavaScript 표현에는 If-Else 문이 사용 불가합니다.
      이에 대한 대안은 ternary ( condition ? true : false ) 표현을 사용하는 것입니다.
      예:  <p>{1 == 1 ? 'True' : 'False'}</p>
      */
    );
  }
}

export default App;
