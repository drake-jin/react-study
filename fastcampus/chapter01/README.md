
# 주의

이 블로그의 내용은 대단히 주관적인 내용으로써, 양질의 글을 읽었지만 똥글이 나오는건 
인간의 생리학적 기능인 배설 활동 중 똥만드는 interface를 상속한 나머지 
주체할 수 없는 인간의 불가항력 생리활동이 왕성해버려 어쩔 수 없음을 미리 알려드립니다.

# Vue가 최고임 ㅎㅎ 왜 굳이 React함? 

  ... 이런 논란은 항상있기 마련이지만.. 상황과 필요에 의해 React가 적합할거 같아 적용합니다...
  도태와 비도태된 기술의 비교도 아니구요.. 개발비용에는 생산비용만 있는것도 아니잖아요..! 

- [React인가 Vue인가?](https://joshua1988.github.io/web_dev/vue-or-react/)

# React는 왜 존재하는가?

> We built React to solve one problem: building large applications with data that changes over time.

큰 SPA의 웹 페이지를 만들라구웃

[글이 올라가 있는 장소](https://github.com/mikrofusion/react/blob/38818189a518fe307681915995177f748e2115ba/docs/docs/01-why-react.md)


#### 그렇다면 큰 어플리케이션에서는 무슨 문제가 존재할까?

DOM 객체에 속성값이든 text든 값은 계속해서 변하게 된다. 또는 새로 만들어지거나 제거하게된다.
이 때 코드는 계속해서 DOM객체의 CRUD코드를 반복해서 코드를 짜 주어야 한다. 그리고 퍼포먼스적인 측면에서 또한
DOM객체를 지속적으로 연산을 하게 될 경우 성능상으로 문제가 될 수 있다. 

페이스북의 React는 이 방법을 가상의 DOM 객체(Virtual DOM)를 이용해 이 문제를 해결하였다.

# DOM? Virtual DOM은 무엇?


#### DOM 

`Document Object Model(DOM)`은 html, js, css로 생성하는 태그들을 말한다. 우리가 자주 보는 `<div>`, `<input>`, `<a>` 등의 것들이다. 

#### VirtualDOM

DOM tree가 인메모리에 하나 더 있고, DOM의 추상화 개념을 활용한 새로운 또 다른 DOM.

#### DOM은 느리다?

DOM이 느리다라는 표현은 옳지 않다. 

맨 위에 언급되었듯이 React의 존재는 대규모 SPA의 웹 페이지를 만들기 위해이며, 대규모 SPA 웹이 아닌 일반 소개페이지라면 당연히 regular(일반) DOM이 더 성능이 좋다.

상황에 따라 다르다는것이다.

#### 그런데.. 왜 다른 블로그들은 DOM에 대한 문제점을 설파할까?

요즘 DOM이 사용되고 있는 트렌드(DOM이 애니메이션마냥 휘황찬란하게 바뀌는 상황)에서 현재의 DOM객체에 문제가 있기 때문이다. 
그 부분은 바로 `브라우저 레이아웃 엔진`에서 발생하며, repaint와 reflow연산작업의 빈번한 발생으로 UI/UX렌더링에 비교적 많은 리소스를 먹게되기 때문이다.

하지만 정확히 알기위해서는 반드시 이 링크를 참조해보는것을 추천한다.

- https://velopert.com/3236
- 링크 요약
![링크요약](./res/browserlayoutengine.png)


# Repaint 와 Reflow 는 무엇?

> **reflow**는 하나의 DOM객체의 크기나 위치가 변경되엇 을 때(레이아웃의 변경작업), 다른 DOM객체들의 위치와 크기가 함께 변경하는것을 말한다.

> **repaint**는 색상이 변경되거나 글자의 내용이 바뀌었을 때 발생되는 연산이다.

코드로보면 다음과 같다.

``` js
var style =document.body.style; //캐싱
style.padding ="20px"; // reflow, repaint
style.border ="10px solid red"; // reflow, repaint
style.color ="blue"; // repaint (레이아웃이변경되진않았기때문에 reflow 안함)
style.backgroundColor ="#ffa"; !// repaint
style.fontSize ="1em"; !// reflow, repaint!

// reflow, repaint
document.body.appendChild(document.createTextNode('hello world!'));
```

하지만 브라우저는 매 한줄 한줄의 명령에 의해 repaint와 reflow가 발생하는것은 아니다.

style에 대한 작업이 더 없고 다른 연산으로 들어갈 때 `Batched DOM Update`가 된다.

즉, 매 한 줄 마다 reapint, reflow연산을 하지 않는다는 것이다.


하지만 그 중에 한줄 한줄 강제로 reflow연산을 발생시키는 동작들이 부분있다. 그것이 바로  [Forced Refflow](https://gist.github.com/paulirish/5d52fb081b3570c81e3a)이다.


#### references

- reflow의 최적화 작업들, [브라우저 레이아웃 엔진의 성능튜닝 10가지](https://www.sitepoint.com/10-ways-minimize-reflows-improve-performance/)


# Virtual DOM


VirtualDOM과 DOM은 화면에 그려지는 그 순간의 차이는 다르지 않다.

하지만 그려지기 이전까지는 VirtualDOM과 regular(일반) DOM은 대단히 다르다.

1. VirtualDOM에는 생명주기가 있으며, regular DOM은 정적으로 그려지게 된다.
2. VirtaulDOM은 regular DOM의 추상화 개념을 사용한다. 이것은 가볍고, 브라우저 스펙의 구현체와는 분리되어있다.(사실 regular DOM은 자체가 추상화 개념이다.)
3. event객체가 서로 다른 객체이다.(하긴.. regular DOM의 추상화 개념을 사용한 것이면 결과물(생성된 DOM) 마저도 다르겠지....)

*이것말고도 더 있겠지만.. 이와 관련되어 자세한 내용이 있는 글이 있다면 ... 공유 부탁드립니다.*
[관련자료:가상돔, 일반 돔의 차이점](https://github.com/FEDevelopers/tech.description/wiki/%EA%B0%80%EC%83%81-%EB%8F%94%EA%B3%BC-%EB%8F%94%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)

- *위 링크가 차이점이라기보다. 서로 다른것을 설명하는 것 같아서.. 마치 오랜지와 감귤의 특징 나열 같은?*
- * ~에 비해 ~하기 어렵다. , ~가 ~문제가 있었는데 ~는 없다., 등등.. 이었으면 좋겠다.*


[관련자료:VirtualDOM vs IncrementalDOM vs Ember’s Glimmer: Fight](https://auth0.com/blog/face-off-virtual-dom-vs-incremental-dom-vs-glimmer/)


> 1. Virtual DOM provides a series of Javascript calls that tell the library how to build an in-memory DOM tree and how to update it when data bound to it changes
>     - VirtualDOM 자바스크립트 종류들은 데이터가 변경될 때, 라이브러리를 통해 in-memory에 있는 돔 트리에게 어떻게 수정할것인지 알려준다. 즉 돔트리가 인메모리에 있다.
> 2. The central piece of Virtual DOM is its smart diffing algorithm: once the differences in the model have been mapped to the in-memory copy of the DOM, the algorithm finds the minimum number of operations required to update the real DOM
>     - Virtual DOM의 핵심은 smart diffing algorithm을 통해 하나의 다른 모델(데이터)에 매핑되어있는 인메모리 안에 있는 돔 객체를 하나 복사한다.  그 알고리즘은 최소의 연산으로 요구되는 실제 돔객체를 찾아서 수정한다.
> 여기서의 두 개의 돔 트리는, 1개는 일반 DOM 트리 이며, 하나는 React 의 Virtual DOM Tree이다.

![diffing process](./res/diffingprocess.png)


혹시 다른 자바스크립트 라이브러리의 DOM Change Workflow가 궁금하다면 다음의 링크를 읽어보고 오길 바란다. 

[Change And Its Detection In JavaScript Frameworks](http://teropa.info/blog/2015/03/02/change-and-its-detection-in-javascript-frameworks.html)

그러니까.. 위에서는 쭈욱~ 일반 DOM 객체가 좋지 않으며 느리다 라고 구박하고 매도했었다. `VirtualDOM`이 더 좋다는건 알겠는데, 뭐가 어떻게 더 좋다는걸까? 


# Virtaul DOM의 장점

앞서 말했지만, repaint와 reflow를 주구장창 이야기한 이유가 있다.
바로 Virtual DOM은 이를 최소화한 DOM 연산을 사용하기 때문이다.

위의 이미지를 보면 Real DOM과 In-memory에 있는 virtaul DOM 을 비교하여 수정 연산을 한 결과를 한 큐에
전부 뱉어냅니다. 그리고 수정은 바뀐것 하나만 하게 하죠. 

이렇게 될경우에 repaint와 reflow는 한번에 레이아웃 계산으로 빠르게 랜더링을 할 수 있게 됩니다.

이 방식이 더블버퍼링과 비슷한 역할을 하게 됩니다.


> https://velopert.com/3236 복 붙
>
> 업데이트: ugwe43to874nf4 라는 레딧유저님이 Virtual DOM 의 중요성을 더 알려주었습니다.
> DOM 조작의 실제 문제는 각 조작이 레이아웃 변화, 트리 변화와 렌더링을 일으킨다는겁니다. 그래서, 예를 들어 여러분이 30개의 노드를 하나 하나 수정하면, 그 뜻은 30번의 (잠재적인) 레이아웃 재계산과 30번의 (잠재적인) 리렌더링을 초래한다는 것이죠.
>
> Virtual DOM 은 그냥 뭐 엄청 새로운것도 아니고, 그냥 DOM 차원에서의 더블 버퍼링이랑 다름이 없는거에요. 변화가 일어나면 그걸 오프라인 DOM 트리에 적용시키죠. 이 DOM 트리는 렌더링도 되지 않기때문에 연산 비용이 적어요. 연산이 끝나고나면 그 최종적인 변화를 실제 DOM 에 던져주는거에요. 딱 한번만 한는거에요. 모든 변화를 하나로 묶어서. 그러면, 레이아웃 계산과 리렌더링의 규모는 커지겠지만, 다시 한번 강조하자면 딱 한번만 하는거에요. 바로 이렇게, 하나로 묶어서 적용시키는것이, 연산의 횟수를 줄이는거구요.
>
> 사실, 이 과정은 Virtual DOM 이 없이도 이뤄질수 있어요. 그냥, 변화가 있을 때, 그 변화를 묶어서 DOM fragment 에 적용한 다음에 기존 DOM 에 던져주면 돼요.
>
> 그러면, Virtual DOM 이 해결 하려고 하는건 무엇이냐? 그 DOM fragment를 관리하는 과정을 수동으로 하나하나 작업 할 필요 없이, 자동화하고 추상화하는거에요. 그 뿐만 아니라, 만약에 이 작업을 여러분들이 직접 한다면, 기존 값 중 어떤게 바뀌었고 어떤게 바뀌지 않았는지 계속 파악하고 있어야하는데 (그렇지 않으면 수정 할 필요가 없는 DOM 트리도 업데이트를 하게 될 수도 있으니까요), 이것도 Virtual DOM 이 이걸 자동으로 해주는거에요. 어떤게 바뀌었는지 , 어떤게 바뀌지 않았는지 알아내주죠.
>
> 마지막으로, DOM 관리를 Virtual DOM 이 하도록 함으로써, 컴포넌트가 DOM 조작 요청을 할 때 다른 컴포넌트들과 상호작용을 하지 않아도 되고, 특정 DOM 을 조작할 것 이라던지, 이미 조작했다던지에 대한 정보를 공유 할 필요가 없습니다. 즉, 각 변화들의 동기화 작업을 거치지 않으면서도 모든 작업을 하나로 묶어줄 수 있다는거죠.


# 컴포넌트
React 에는 Component라는 개념이 있다. 나는 이것을 `하나의 기능`을 위한 DOM 덩어리라 생각한다.
그리고 원래 컴포넌트라는 단어는 컴포넌트는 소프트웨어의 재사용의 중요성 과 필용성을 위해 나온 기술이란 이름에서 비롯했다. 

> 즉 재사용, 필용성이 있는 하나의 기능을 하는 DOM 덩어리이다. 나는 그렇게 정의를 내렸다. (자세한 정의가 알고싶다면 이 곳이 아닌 구글에 검색해보길 바란다.)


# 조화(Reconciliation) 비교 알고리즘

render가 되었을 때 이 알고리즘이 나오는 순간이며, 
실제 조화(Reconciliation) 비교 알고리즘 알고리즘을 생각하게 되었을 때가 바로 
render()를 돌릴때에 모든 노드를 굳이 새로 만들어내야하는가 에서 시작되었다고 한다.

즉, 컴포넌트가 update 되는 순간에 The Diffing Algorithm와 Reconciliation Algorithm이 사용된다.

(The diffing algorithm은 Reconciliation Algorithm을 활용한 로직알고리즘)

성능은 기존 트리비교(he state of the art algorithms을 이용)는 t O(n^3)이라면 리엑트의 트리비교 알고리즘(Heuristic을 이용)은  O(n)의 비교를 한다. 

[제목 : D2의 React 적용하기 전에 읽어둘것 중에 Reconciliation을 찾아서 보길 바란다.](http://d2.naver.com/helloworld/9297403)


# 컼포넌트의 장점

1. 비교, 탐색이 빠르다.
2. 변경된 부분에 대해서만 렌더링을 새로하기때문에 빠르다.
3. DOM Tree구조 자체가 다르면 내부 비교를 하지 않음

이 3개의 장점을 존재하게한 알고리즘이 있는데 리엑트를 깊게 공부하려거든 이 링크의 글을 보는것이 좋다.

[공홈: 조화(Reconciliation) 비교알고리즘](https://reactjs.org/docs/reconciliation.html)

# 조화 비교알고리즘의 동작

1. 엘리먼트 타입이 다를경우
  ``` js
renderA: <div /> 
// 이후
renderB: <span /> 
  ```
div를 제거하고 span태그를 추가한다.

2. 엘리먼트 타입이 같을경우

  ``` js
renderA: <Counter a="1"/> 
// 이후
renderB: <Counter a="2"/>  
  ```
컴포넌트가 사라지지 않고, 속성(props)값만 변경 

3. 리스트를 렌더링 할 때


다르게 생겼으면 내부비교하지않음, key 를 사용해서 리스트 렌더링 성능을 최적화 한다.


# React에 대해서 깊이 있게 알아보려면..

- https://reactjs.org/docs 에서 `Advanced Guide`를 참조하세요.

