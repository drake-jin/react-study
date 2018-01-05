---
layout: post
cover: 'assets/images/post/tags/react.png'
title: (스터디) React에 대해 알아보자 - 8
date: 2017-06-14
tags: react
subclass: 'post tag-react'
categories: 'drakejin'
navigation: True
---
모든 지적 재산권은 velopert 님에게 있습니다. velopert님께 감사합니다.
[velopert님의 강의](https://velopert.com) 원본을 보는것을 강력하게 추천합니다.

# 10강 React.JS 강좌 : 리엑트 프로젝트에서 라우터 사용하기

> 아직 React-Router v3 는 유지보수가 이뤄지고 있는 상태이며,
>
> 현재 2017년 3월 기준 가장 최신 버전은 v4 입니다
>
> (한동안 베타였는데 정식 릴리즈되었습니다.)

Velopert님의 영상 [Router. v4]
https://velopert.com/3275

 > 현재 React-router 의 최신버전은 v4 입니다. v4 의 경우 새로운 방식의 라우팅이기 떄문에
 >
 > 서브라우트의 경우 뒤로가기가 제대로 작동하지 않는 이슈가 있었고
 >
 > (  / → /post/1 → /post/2 )
 > 로 이동을 한다음에 뒤로가기를 하면 중간 서브라우트가 생략되고 / 로 되는 이슈 )
 >
 > 문서들이 부족해서 서버사이드 렌더링을 하게 될 때 가이드가 좀 부족한 편이고
 >
 > (특히 리덕스 등의 상태 관리 라이브러리와 함께 사용시..)
 >
 > 써드 파티 라이브러리도 조금 적은 편입니다.
 >
 > 그래서, 이 포스트에서는 v3 를 다뤄보겠습니다.
 > 이 버전은 기존의 v2 버전과 동일하게 작동하는데, 기능개선 및 버그수정이 된 버전입니다.


## 라우터 개요
 - 리액트 프로젝트에서 여러 페이지가 있을 때, 라우터를 사용합니다.
 - 라우터는 사용자가 요청한 URL에 따라서 다른 결과물을 렌더링해줍니다.
 - 일반 Apache, Nginx 등의 웹 서버에서 각 페이지마다 다른 디렉토리 및 파일을 제공하여 여러 페이지를 구현하는것과 달리,
 리액트 라우터(react-router)를 사용하는 프로젝트에서는 어떤 경로로 들어오던
 똑같은 html 파일과 자바스크립트 파일을 제공을 합니다.
 - 여기서 제공되는 js 파일에서는 웹 어플리케이션에서 사용 할 모든 컴포넌트들이 담겨있고,
URL에 따라서 지정된 컴포넌트를 렌더링해줍니다.
 - 그리고, 페이지가 한번 로드 된 다음에 다른 페이지로 이동 시,
이동 될 때 마다 페이지를 처음부터 로딩하지 않고 기존에 불러왔었던 자바스크립트 파일을 이용하여
페이지에서 기존 컴포넌트를 언마운트 시키고 다른 컴포넌트를 마운트합니다.

## 실습
```
$ npm install -g create-react-app
$ create-react-app router-tutorial
$ cd router-tutorial
$ npm run eject
$ npm install --save react-router@3.0.0
$ npm start
```

#### 소스코드

 - 서버에서 실행

    ```
    node server/index.js
    ```

 -  리엑트 개발에서 실행

    ```
    npm start
    ```

[create-react-app 참고](https://velopert.com/2037)
React 작업환경을 명령어 하나로 설정 할 수 있는 “공식 도구”
더 이상 webpack / babel 등을 설정하느라 시간을 투자하지 않아도 되고,
unofficial hot boilerplate 를 사용 할 필요도 없다.
