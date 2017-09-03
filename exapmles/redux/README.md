---
layout: post
cover: 'assets/images/post/tags/react.png'
title: (스터디) React에 대해 알아보자 - 9
date: 2017-06-14
tags: react
subclass: 'post tag-react'
categories: 'drakejin'
navigation: True
---
모든 지적 재산권은 velopert 님에게 있습니다. velopert님께 감사합니다.
[velopert님의 강의](https://velopert.com) 원본을 보는것을 강력하게 추천합니다.


## 10강 Redux : React 앱의 효율적인 데이터 교류

React.js 를 통하여 만들어진 어플리케이션에서 데이터 교류 및 state 관리를 쉽고 효율적으로 하게 해주는 Redux 에 대하여 공부해보겠습니다.
강좌가 길어질 것 같아서 파트를 나눠서 강좌를 작성하겠습니다. 이번 파트에서는 이해를 돋구기 이하여 배경지식 및 특징을 알아보겠습니다.


### 소개
Redux는 JavaScript 어플리케이션에서 data-state 와 UI-state 를 관리해주는 도구입니다.
이는 상태적 데이터 관리가 시간이 흐름에 따라 복잡해질수도 있는
싱글 페이지 어플리케이션 (Single Page Application) 에서 매우 유용하게 사용됩니다.

그리고, Redux는 React 외에도, jQuery 혹은 Angular 를 사용하는 어플리케이션에서도 사용 될 수 있습니다.

지난 강좌를 읽어보셨다면, React 에서 데이터흐름은 단일 방향으로만 흐른다는것을 배우셨을 것 입니다.
state 및 props 강좌 에서는 parent-child 관계를 통하여 데이터를 교류하는것을 배워었죠.
하지만, 컴포넌트 갯수가 많아진다면.. 혹은 데이터를 교류 할 컴포넌트들이 parent-child 관계가 아니라면
지금까지 해왔던것처럼 하면 복잡해진답니다.

![another branch](https://velopert.com/wp-content/uploads/2016/04/01-450x357.png)

그리고, 빨간색 컴포넌트가 파란색 컴포넌트, 초록색 컴포넌트와 데이터를 교류해야 하는 상황이 왔을 땐, 어떻게 해야 할까요?
a

저희가 배웠었던 기본적인 parent-child 구조를 사용하여 데이터를 교류하면 어떨까요?

![그래도 불편](https://velopert.com/wp-content/uploads/2016/04/02-450x357.png)

그것이 바로 Flux 패턴
Flux? “Flux” 자체는 라이브러리가 아니라, 디자인패턴입니다.
Flux : parent-child 관계가 아닌 컴포넌트끼리 데이터를 교류 할 때엔 글로벌 이벤트 시스템을 설정 하는 방법이 있다. … Flux 패턴은 이를 수행하기 위한 방법 중 하나이다.
Flux에 대하여 알아보기전에, 기존에 널리사용되고 있는 MVC 디자인 패턴에 대하여 알아봅시다.


### MVC 패턴
![MVC](https://velopert.com/wp-content/uploads/2016/04/MVC.png)

Model과 View가 늘어난다면 어떻게 될까요?

![Complexible MVC](https://velopert.com/wp-content/uploads/2016/04/MVC2.png)

어떤 모델이 뷰를 건들이고, 그 뷰가 어떤 또 다른 모델을 건들이고.. 무한반복하게 된다.
Front 작업에서는 MVC가 적절하지 못할 수 있다.

### Flux 패턴
MVC 문제를 해결하기 위해서 FLUX 라는 디자인 패턴이 만들어졌습니다.

![FLUX](https://velopert.com/wp-content/uploads/2016/04/flux-simple-f8-diagram-1300w.png)

시스템에서 어떠한 Action 을 받았을 때, Dispatcher가 받은 Action들을 통제하여 Store에 있는 데이터를 업데이트합니다. 그리고 변동된 데이터가 있으면 View 에 리렌더링합니다.

![Flux Pattern](https://velopert.com/wp-content/uploads/2016/04/flux-simple-f8-diagram-with-client-action-1300w.png)

View에서 Dispatcher로 Action을 보낼 수도 있죠
Dispatcher은 작업이 중첩되지 않도록 해줍니다. 즉, 어떤 Action이 Dispatcher를 통하여 Store에 있는 데이터를 처리하고, 그 작업이 끝날 때 까지 다른 Action들을 대기시킵니다.

### Redux 라이브러리
Redux는 Flux 아키텍쳐를 좀 더 편하게 사용 할 수 있도록 해주는 라이브러리입니다.

![Redux library](https://velopert.com/wp-content/uploads/2016/04/03-450x372.png)

- store에서 모든 데이터를 담고 있고, 컴포넌트끼리는 직접 교류하지 않고 store 중간자를 통하여 교류합니다.
- 빨간 화살표는 dispatch 를 의미하며 store에 있는 데이터를 업데이트 하는것을 가르킵니다.
- 주황색 화살표는 subscribe를 의미합니다.
- subscribe는 해당 컴포넌트에서 store에 있는 특정 데이터의 변동을 주의하고있다가 변동이 있을시 바로 반영시키는것을 가르킵니다.


## Redux의 3원칙

#### 하나, Single Source of Truth (단 하나의 진실의 근원)
 - Redux는 어플리케이션의 state를 위해 단 한개의 store 를 사용합니다.
 - 모든 state 가 한곳에 있기 떄문에 이를 Single Source of Truth 라고 부릅니다.
 - (그리고 이는 Flux 와의 주요 차이 입니다. Flux 에서는 여러개의 store 를 사용합니다.)
 - store의 데이터 구조는 개발자 하기 나름입니다. 보통 매우 nested 된 구조로 이뤄져있습니다.
 - 즉, JavaScript 객체로서, { { {} {} {} }, {} } 이런식으로 잘 정리되어있다는 의미입니다.

#### 둘, State is read-only (State는 읽기전용이다)

 - Redux 매뉴얼을 보면, “The only way to mutate the state is to emit an action, an object describing what happened.”
 - (번역: state를 변경하는 유일한 방법은 어떤일이 발생했는지 나타내주는 action 객체를 전달하는것이다) 라고 적혀있습니다.
 - 즉, 어플리케이션에서 state를 직접 변경 할 수는 없다는 의미입니다. state 를 변경하기 위해서는, action 이 dispatch 되어야 합니다.
 - (dispatch 는 ‘보낸다’는 뜻 입니다)  action 은, 어떤 변화가 일어나야 할 지 알려주는 객체입니다.

##### 셋, Changes are made with Pure Functions (변화는 순수 함수로 만들어져야 한다)

 - 두번째 원칙에 설명된것처럼 Redux 에선 어플리케이션에서 state 를 직접 변경하는것을 허용하지 않습니다.
 - 그 대신에 action 을 dispatch 하여 상태값을 변경하는 과정에서 받아온 action 객체를 처리하는 함수를 Reducer 라고 부릅니다.
 - action은 어떤 변화를 일어나야 할 지 알려주는 객체라면, Reducer 는 그 정보를 받고 애플리케이션의 상태를 어떻게 바꿀지 정의한다고 볼 수 있습니다.
 - Reducer 는 ‘순수 함수’ 로만 작성되야합니다. 함수가 순수하다니… 좀 헷갈리죠? 아래 불렛 포인트를 보시면 이해가 가실거에요.
 - Reducer 의 순수함수 정의
      1.  외부 네트워크 혹은 데이터베이스에 접근하지 않아야한다.
      2.  return 값은 오직 parameter 값에만 의존되어야한다.
      3.  인수는 변경되지 않아야한다.
      4.  같은 인수로 실행된 함수는 언제나 같은 결과를 반환해야한다.
      5.   순수하지 않은 API 호출을 하지 말아야 한다. (Date 및 Math 의 함수 등)

-------------------

## 실습
- store: React.js 프로젝트에서 사용하는 모든 동적 데이터들을 담아두는 곳 입니다.
- action: 어떤 변화가 일어나야 할 지 나타내는 객체입니다.
- reducer: action 객체를 받았을 때, 데이터를 어떻게 바꿀지 처리할지 정의하는 객체입니다.

## 의존 모듈 설치

 - redux
 - react-redux: React.js 프로젝트에서 Redux 를 더 편하게 사용 할 수 있게 해줍니다.

``` sh
$ npm install --save redux react-redux # react-redux 설치
$ cd ./sk
$ mkdir actions components reducers #
$ touch actions/index.js components/App.js components/Buttons.js components/Counter.js components/Option.js reducers/index.js
```

#### 완성된 디렉토리 구조

    src
    ├── actions
    │        └── index.js
    ├── components
    │        ├── App.js
    │        ├── Buttons.js
    │        ├── Counter.js
    │        └── Option.js
    ├── index.js
    └── reducers
        └── index.js


작업 순서 : action -> reducer -> store -> components 순으로 프로젝트를 작성하겠습니다.


## 개발
  1. 나머지는 리덕스 패턴을 사용한 예제.
  2. WithoutReact.js 는 리덕스 라이브러리를 사용하지 않고 구현한 리덕스 패턴


## Tips

![export 가 무엇인지 모르겠나요?](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export)










.
