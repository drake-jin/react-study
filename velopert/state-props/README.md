---
layout: post
cover: 'assets/images/post/tags/react.png'
title: (스터디) React에 대해 알아보자 - 5
date: 2017-06-10
tags: react
subclass: 'post tag-react'
categories: 'drakejin'
navigation: True
---
모든 지적 재산권은 velopert 님에게 있습니다. velopert님께 감사합니다.
[velopert님의 강의](https://velopert.com) 원본을 보는것을 강력하게 추천합니다.

## 5강. Component의 state 와 props 사용하기

이번 장은 소스코드의 주석으로 상세히 말씀드리겠습니다.

## Props
 props는 컴포넌트에서 사용 할 데이터 중 변동되지 않는 데이터를 다룰 때 사용됩니다.
parent 컴포넌트에서 child 컴포넌트로 데이터 전할 때, props가 사용됩니다.

### 기본 값 사용하기
 props값을 임의로 지정해주지 않았을 때 사용할 기본값을 설정하는 방법을 알아보도록 합니다.
기본값을 설정할 때에는, 컴포넌트 클래스 하단에 className.defaultProps = {propName: value}를 삽입하면 됩니다.

### Type 검증(Validate)하기
 컴포넌트에서 원하는 props 의 Type 과 전달 된 props 의 Type이 일치하지 않을 때
콘솔에서 오류 메시지가 나타나게 하고 싶을 땐,  
컴포넌트 클래스의 propTypes객체를 설정하면 됩니다. 또한, 이를 통하여 필수 props 를 지정할 수 있습니다. 즉, props를 지정하지 않으면 콘솔에 오류메시지가 나타납니다.

## State
컴포넌트에서 유동적인 데이터를 다룰 때, state를 사용한다.
React.js 어플리케이션을 만들 땐, state 를 사용하는 컴포넌트의 개수를 최소화 하는 것 을 노력해야 합니다.
예를들어 10개의 컴포넌트에서 유동적인 데이터를 사용하게 될 땐, 각 데이터에 state를 사용 할 게 아니라, props 를 사용하고 10개의 컴포넌트를 포함시키는 container컴포넌트를 사용하는것이 효율적입니다.


## props VS state

특성 | props | state
---- | ----- | ----
parent 컴포넌트에 의해 값이 변경될 수 있는가? | 예 | 아니오
컴포넌트 내부에서 변경될 수 있는가?     | 아니오 | 예

## 소스코드 및 실행

이번장은 소스코드를 순서대로 살펴보면서 주석들을 자세히 읽어봅시다.

  1. cp -R ../ch04/react-skeleton ./
  2. props [react-skeleton/src/components/App.js](https://github.com/drake-jin/react-study/tree/master/ch05/react-skeleton/src/components/App.js)
  3. props [react-skeleton/src/components/Content.js](https://github.com/drake-jin/react-study/tree/master/ch05/react-skeleton/src/components/Content.js)
  4. props [react-skeleton/src/index.js](https://github.com/drake-jin/react-study/tree/master/ch05/react-skeleton/src/index.js)
  5. props [react-skeleton/src/ValidationExample.js](https://github.com/drake-jin/react-study/tree/master/ch05/react-skeleton/src/ValidationExample.js)
  6. state [react-skeleton/src/StateExample.js](https://github.com/drake-jin/react-study/tree/master/ch05/react-skeleton/src/StateExample.js)
  7. state [react-skeleton/src/RandomNumber.js](https://github.com/drake-jin/react-study/tree/master/ch05/react-skeleton/src/RandomNumber.js)


### 결과 화면

![result](https://github.com/drake-jin/react-study/tree/master/docs/ch05/result.png)
