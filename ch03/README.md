---
layout: post
cover: 'assets/images/post/tags/react.png'
title: (스터디) React에 대해 알아보자 - 3
date: 2017-05-28
tags: react
subclass: 'post tag-react'
categories: 'drakejin'
navigation: True
---
모든 지적 재산권은 velopert 님에게 있습니다. velopert님께 감사합니다.
[velopert님의 강의](https://velopert.com) 원본을 보는것을 강력하게 추천합니다.

## 3강. JSX

#### react 환경설정

``` bash
$ git clone https://github.com/velopert/react-skeleton.git # 프로젝트 클론하기
$ npm install # dependency설정하기
$ npm start # 개발서버 실행하기 포트 7777
```

## JSX

### JSX의 장점
 1. JSX는 컴파일링 되면서 최적화 되므로, 빠르다.
 2. Type-Safe 어떠한 연산도 정의되지 않은 결과를 내놓지 않는 것, 즉 예측 불가능한 결과를 나타내지 않는 것으로 하며, 컴파일링 과정에서 에러를 감지할 수 있다.
 3. HTML에 익숙하다면 JSX의 사용은 좀 더 명시적이고 빠르게 템플릿을 작성할 수 있다.  

 - JSX와 JS 소스코드적인 차이.
    - [JSX](https://jsfiddle.net/reactjs/69z2wepo/) vs [JS](https://jsfiddle.net/reactjs/5vjqabv3/)

 1. 소스코드
    -[ch03/react-skeleton/src/components/App.js](https://github.com/drake-jin/react-study/tree/master/ch03/react-skeleton/src/components/App.js)


### JSX Feature

1. If-Else 문 사용 불가
JSX 안에서 사용되는 JavaScript 표현에는 If-Else 문이 사용 불가합니다. 이에 대한 대안은 ternary ( condition ? true : false ) 표현을 사용하는 것입니다.
예:  <p>{1 == 1 ? 'True' : 'False'}</p>

2. React의 Inline Style또는 Property 에서는, string 형식이 사용되지 않고 key 가 camelCase 인 Object 가 사용됩니다.

3. JSX 안에서 주석을 작성할 때엔, { /* comments \*/ } 형식으로 작성하면 됩니다. 여기에 작성된 주석은 브라우저상 source 에서 나타나지 않습니다. 주의하실 점은
Nested Element 에서 나왔던 것 처럼 container element 안에 주석이 작성되어야 합니다.  // 주석은 안됨
