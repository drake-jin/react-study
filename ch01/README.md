
## 강의 소개 


## 1강 

오늘 배울것에 대한 간단한 소개 

 - Redux : 페이스북의 Flux 아키텍쳐의 구현체이며 어플리케이션의 상태를 관리
 - Webpack : 모듈 번들러, 각종 로더 플러그인들을 통해 프로젝트를 빌드하는 작업을 돕는다.
 - React Fundamentals : 우리가 배울것 
 - Express : 나중엔 mongoDB와 함께 연결하여 간단한 Nodejs로 구현하는 웹 서버를 만들것. 
 - Es6 : ECMA6라 부르며 기존 자바스크립트의 문법과 페다임이 변한 최신의 자바스크립트 문법.
 - MongoDB &mongoose : nosql이며 mongoose는 mongoDB를 연결하기 위한것,

## 만들것 
 - 전화번호부 : ReactJS의 기초를 공부하기위해 
 - 카운터 : (Redux)를 이용하여 구현할것. flux아키텍쳐의 구현체
 - 무한스크롤형 메모패드 : 지속해서 스크롤 다운 할 때마다 하단에 새로운 게시글이 나타나도록, 게시글 CRUD 를 할 것 

--------------

## Javascript 어플리케이션을 어떻게 구조화 할까?
 - 각종 프레임워크를 사용해서 
   - agility.js
   - angular.js 
   - aria temmplates 
   - backbone.js 
   - batman.js 
   - bolt 
   - canjs 
   - chaplin 
   - brunch 
   - closure
   - cujo.js 
   - dart 
   - derby 
   - dermis 
   - dijon 
   - dojo
   - due 
   - ember.js 
   - epitome
   - funnyface.js 
   - gwt
   - kendo ui 
   - knockback.js 
   - knockout.js 
   - maria 
   - marionatte 
   - meteor.js 
   - montage 
   - olives 
   - plastronjs
   - puremvc 
   - rappid.js 
   - sammy.js 
   - serenade.js 
   - sockerstream
   - soma.js 
   - spine

## Reactjs는 프레임워크가 아닌 라이브러이다.
 - 프레임워크는 
   - 프레임워크는 필요한 기능이 이미 만들어져있음
   - 틀에서 벗어나기가 어려움
   - 프레임워크는 단 하나만 사용하는게 일반적,
   - 가끔씩은 다른것과 같이 사용할 수 있지만, 충돌이 발생할 수 있다.

 - 라이브러리
   - 필요한 부분에다가 가져다 쓰면 되는 개념
   - 다른 라이브러리랑 충돌하지 않음
   - UI를 만들기 위한 라이브러리
   - 컨트롤러나 라우터 기능이 구현되어있지 않음.
   - 서드파티 라이브러리를 이용하여 구현할 수 있다.

_리액트가 앵귤러를 대체 할 수 있나?_ : 아니다.
인도와 인도네시아 만큼의 차이가 있다. 참고로 리액트와 앵귤러를 같이 사용할 수 있다.
React Native를 이용하여 Angular와 함께 더불어 사용할 수 있다. 
앵귤러는 프레임워크, 리엑트는 라이브러리.

## ReactJS의 특징
 - Virtual DOM 
   - 제이쿼리나 VanillaJS를 이용하여 DOM을 만들어서 사용해본적이 있나..?
   - 기존 Original DOM은 무겁다. 그리고 관리하기 힘들어진다. 
   - Virtaul DOM 은 이를 추상화 시킴으로써 자바스크립트 객체에 불과한 녀석이다. 
   - 이미 랜더링된 HTML된 DOM객체를 이용해서 처리하는것보다 추상화된 객체를 이용해 처리하는것이 더 빠름.
   - 한 페이지에 수 많은 DOM객체들이 나열되어있고 JSON으로 정보를 받아 수 많은 정보들을 처리해야 한다. 
   - 이때 수 많은 HTML을 수정해야할 때 React Virtual DOM객체를 이용하는것이 좀 더 효율적이다.
   - 코드로 직접 작성하지 않아도 된다. React 의 Virtual DOM상태와 서버로 부터 받은 DOM객체의 정보가 다를경우에만 DOM 변경작업을 수행한다.

## ReactJS의 장점
 - ReactJS는 배우기 쉽다.
 - 복잡함이 없다. 
 - 데이터 관리 컨트롤러, 디렉트, 템플릿, 리스너, 모델 등등이 아니라 그냥 Component객체로 이용함.
 - 뛰어난 Garbage Collector , 메모리 관리, 성능을 지원함.
 - 서버 랜더링, 클라이언트 랜더링 을 지원한다. 
 - 서버 사이드 랜더링이 필요한 이유= 

















