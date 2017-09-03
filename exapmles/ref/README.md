---
layout: post
cover: 'assets/images/post/tags/react.png'
title: (스터디) React에 대해 알아보자 - 8
date: 2017-06-13
tags: react
subclass: 'post tag-react'
categories: 'drakejin'
navigation: True
---
모든 지적 재산권은 velopert 님에게 있습니다. velopert님께 감사합니다.
[velopert님의 강의](https://velopert.com) 원본을 보는것을 강력하게 추천합니다.

## 8강 ref에 대하여 VirtualDOM에 라벨링
 -  Virtaul DOM에 이름을 단다.
 - HTML 의 id와 사뭇 비슷하지만, id는 일반 DOM 요소에 특정 DOM 메소드만 사용 할 수 있지만,
 - ref는 DOM 요소에도 사용하고 컴포넌트에도 사용 할 수 있으며,
 - 해당 컴포넌트가 가지고있는 메소드 및 변수들을 사용 할 수 있다는 점이 큰 차이점 입니다.

#### ref 이용시 주의 사항
 1. ref를 아무 곳에서나 자주 사용하지 않는다.
 2. state 및 props 로 해결 할 수 있는 부분에선 ref 를 사용하지 않고,
 해결 할 수 없는 부분에서만 ref 를 사용하는 것이 유지보수에 좋은 방향입니다.
 3. 이 개념을 일단 잘 배워뒀다가 남용하지 말고 꼭 필요한 때에 쓰도록 합시다.

#### ref 이용시 적절한 사항
 4. 컴포넌트에 의해 렌더 된 DOM 에 직접 어떠한 처리를 해야 할 경우
 5. 큰 프로젝트에 React 컴포넌트를 사용하는 경우 (예: 다른 웹프레임워크와 혼용)


## ref 사용

#### 1. 문자열 ref 사용
 outdated된 방법입니다. 그래도 일단 참고용으로 한번 배워봅시다.
``` js
class Hello extends React.Component {
    render() {
        return (
          <div>
            <input ref="myInput">
            </input>
          </div>
        )
    }

    componentDidMount() {
      this.refs.myInput.value = "Hi, I used ref to do this";
      // 문자열 형식으로 만든 ref 는 this.refs.refName으로 접근해야 합니다.
      // 추가적으론, refs 를 사용 할 때는 컴포넌트가 렌더링 된 후 이여야 합니다.
    }
}

ReactDOM.render(
  <Hello/>,
  document.getElementById('app')
);
```

#### 2. 콜백 함수 ref 사용하기

``` js
class Hello extends React.Component {
  render() {
  	return (
    	  <div>
      	    <input ref={ref => this.input = ref}>
            /*
{ } 안에 함수를 넣어 ref 를 설정하였습니다.
이 코드에선 arrow function 이 사용되었습니다.
함수 안에서 어떤 변수가 ref 로 사용 될 지 직접 정하였습니다.
            */
            </input>
          </div>
        )
  }

  componentDidMount() {
  	this.input.value = "I used ref to do this";
    // 5번줄에서 썼던 변수를 사용하면 됩니다. 더이상 String을 쓸 때 처럼 this.refs 를 사용하지 않아도 됩니다.
  }

}
ReactDOM.render(
  <Hello/>,
  document.getElementById('app')
);
```

#### 2. 콟백 함수 ref 응용


``` js
class Hello extends React.Component {
    handleClick() {
    	  this.textBox.input.value = "I used ref";
    }

    render() {
  	    return (
    	    <div>
      	    <TextBox ref={ref=>this.textBox = ref}/>
            <button onClick={this.handleClick.bind(this)}>Click Me</button>
          </div>
        )
  }
}

class TextBox extends React.Component {
    render() {
        return(
        	<input ref={ref => this.input = ref}>
          </input>
        )
    }
}

```


## 3.적용하기
이번엔 ref를 사용하기에 적절한 사례에 대해 이야기한다.
예를들어, input  과 button이 있고, button을 누르면 input 을 초기화 하고 focus 를 해야 할 때는, ref 를 사용 해야만 합니다.

``` js
class Hello extends React.Component {
    handleClick() {
    	  this.input.value = "";
        this.input.focus();
    }

    render() {
      	return (
      	    <div>
      	        <input ref={ref=> this.input = ref}/>
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        );        
        // ref를 설정하는 부분입니다
        // JavaScript DOM 메소드를 이용하여 인풋박스에 포커스를 하였습니다.
    }
}
```
