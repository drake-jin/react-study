---
layout: post
cover: 'assets/images/post/tags/react.png'
title: (스터디) React에 대해 알아보자 - 7
date: 2017-06-12
tags: react
subclass: 'post tag-react'
categories: 'drakejin'
navigation: True
---
모든 지적 재산권은 velopert 님에게 있습니다. velopert님께 감사합니다.
[velopert님의 강의](https://velopert.com) 원본을 보는것을 강력하게 추천합니다.

## 7강 Component LifeCycle API
LifeCycle API는, 컴포넌트가 DOM 위에 생성되기 전 후 및 데이터가 변경되어
상태를 업데이트하기 전 후로 실행되는 메소드 들 입니다.

![배경화면해놓고 보는대 최고](https://kunigami.files.wordpress.com/2016/01/react.png)


## 각 이벤트별 진행과정

1. 컴포넌트를 생성 할 때
  - constructor -> componentWillMount -> render -> componentDidMount 순으로 진행됩니다.
2. 컴포넌트를 제거 할 때
  - componentWillUnmount 메소드만 실행됩니다.
3. 컴포넌트의 prop이 변경될 때
  - componentWillReceiveProps -> shouldComponentUpdate -> componentWillUpdate-> render -> componentDidUpdate
4. state가 변경될 떄
  - props 를 받았을 때 와 비슷하지만 shouldComponentUpdate 부터 시작

## 각 메서드별 특징

### 1. constructor
생성자 메소드로서 컴포넌트가 처음 만들어 질 때 실행됩니다.
이 메소드에서 기본 state 를 정할 수 있습니다.
    ```
    constructor(props){
        super(props);
        console.log("constructor");
    }
    ```

### 2. componentWillMount
컴포넌트가 DOM 위에 만들어지기 전에 실행됩니다.

    ```
    componentWillMount(){
        console.log("componentWillMount");
    }
    ```

### 3. render
컴포넌트 렌더링을 담당합니다.
    ```
      render( <div>dasdasd</div>);
    ```

### 4. componentDidMount
컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드입니다.
이 안에서 다른 JavaScript 프레임워크를 연동하거나,
setTimeout, setInterval 및 AJAX 처리 등을 넣습니다.

    ```
    componentDidMount(){
        console.log("componentDidMount");
    }
    ```

### 5. componentWillReceiveProps
컴포넌트가 prop 을 새로 받았을 때 실행됩니다.
prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용합니다.
이 안에서 this.setState() 를 해도 추가적으로 렌더링하지 않습니다.

    ```
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
    }
    ```

### 6. shouldComponentUpdate
prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드입니다.
6강의 예제에선 무조건 true 를 반환 하도록 하였지만, 실제로 사용 할 떄는 필요한 비교를 하고 값을 반환하도록 하시길 바랍니다.
예: return nextProps.id !== this.props.id;
JSON.stringify() 를 쓰면 여러 field 를 편하게 비교 할 수 있답니다.

    ```
    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
        return true;
    }
    ```

### 7. componentWillUpdate
컴포넌트가 업데이트 되기 전에 실행됩니다.
이 메소드 안에서는 this.setState() 를 사용하지 마세요 – 무한루프에 빠져들게 됩니다.

    ```
    componentWillUpdate(nextProps, nextState){
        console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
    }
    ```

### 8. componentDidUpdate
컴포넌트가 리렌더링을 마친 후 실행됩니다.

    ```
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
    }
    ```

### 9. componentWillUnmount
컴포넌트가 DOM 에서 사라진 후 실행되는 메소드입니다.

    ```
    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    ```
