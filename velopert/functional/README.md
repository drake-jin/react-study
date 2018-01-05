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

## 9강: 함수형 컴포넌트 (Functional Component)

### 구현방법 4가지
#### 1. class 문법
React 에서 컴포넌트를 정의 할 때는 보통 EcmaScipt 6 에 도입된 class 문법을 사용합니다.
컴포넌트에서 라이프사이클 API 를 사용해야 하거나,
state 를 사용하는 경우에는 꼭 이렇게 정의를 해야하죠.

[react-skeleton/src/components/Functional1.js](https://github.com/drake-jin/react-study/tree/master/functional/react-skeleton/src/components/Functional1.js)

----------
#### 2. ES5 일반 함수 이용
[react-skeleton/src/components/Functional2.js](https://github.com/drake-jin/react-study/tree/master/functional/react-skeleton/src/components/Functional2.js)

#### 3. 화살표 함수 이용
[react-skeleton/src/components/Functional3.js](https://github.com/drake-jin/react-study/tree/master/functional/react-skeleton/src/components/Functional3.js)

#### 4. 비구조화 할당 문법
[react-skeleton/src/components/Functional4.js](https://github.com/drake-jin/react-study/tree/master/functional/react-skeleton/src/components/Functional4.js)


## 함수형 컴포넌트는
저의 경우에는 state 나 라이프사이클 API 를 전혀 사용하지 않을 때,
그리고 해당 컴포넌트는 자체 기능은 따로 없고 props 가 들어가면 뷰가 나온다는 것을 명시하기 위해 사용합니다.

특히, Redux 를 사용하여 컴포넌트들을 구성 할 때, Container 컴포넌트 (혹은 Smart, 컴포넌트) 는
클래스형 컴포넌트를 사용하고, Presentational 컴포넌트 (혹은, Dumb 컴포넌트) 는 함수형 컴포넌트를 사용합니다.

함수형 컴포넌트를 사용 할 때 첫 마운팅 속도에 있어서는 7% ~ 11% 빠릅니다. (https://github.com/missive/functional-components-benchmark)
