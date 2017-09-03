---
layout: post
cover: 'assets/images/post/tags/react.png'
title: (스터디) React에 대해 알아보자 - 6
date: 2017-06-11
tags: react
subclass: 'post tag-react'
categories: 'drakejin'
navigation: True
---
모든 지적 재산권은 velopert 님에게 있습니다. velopert님께 감사합니다.
[velopert님의 강의](https://velopert.com) 원본을 보는것을 강력하게 추천합니다.

## 6강 컴포넌트 Iteration (반복) – Map

## 기본 JavaScript – Array.prototype.map

```
  arr.map(callback, [thisArg])
```

  1. callback 새로운 배열의 요소를 생성하는 함수로서, 다음 세가지 인수를 가집니다.
     - currentValue 현재 처리되고 있는 요소
     - index 현재 처리되고 있는 요소의 index 값
     - array 메소드가 불려진 배열

  2. thisArg (선택항목) callback 함수 내부에서 사용 할 this 값을 설정


#### Smaple

```
// ES 5
var numbers = [1, 2, 3, 4, 5];

var processed = numbers.map(function(num){
    return num*num;
});

// ES 6
let numbers = [1, 2, 3, 4, 5];

let result = numbers.map((num) => {return num*num});
```
 ![es5 vs es6 syntax style](https://velopert.com/wp-content/uploads/2016/03/%EC%9D%B4%EB%AF%B8%EC%A7%80-5-1.png)


## 2. 컴포넌트 mapping

소스코드를 살펴보시기 바랍니다.

1. [src/components/App.js](https://github.com/drake-jin/react-study/tree/master/ch06/react-skeleton/src/components/App.js)


## 3. state 안의 array 에 원소 삽입/제거/수정 권고안!

 1. this.state 에 포함된 배열에 원소를 삽입/제거/수정 을 할 때 그 배열에 직접 접근하면 안됩니다.
 2. 원소를 추가 할 때 배열객체의 push() 메소드를 사용하면 원하는대로 되지 않습니다.
 3. this.state가 변경된다고해서 컴포넌트가 업데이트되지 않기 때문입니다.
 4. this.state를 변경 후 React 컴포넌트 API 인 forceUpdate()를 통하여 컴포넌트가 render()를 다시 실행 하게 끔 하는 방법이 있긴하지만 *이건 절대 권장되지 않는 방법입니다.*
 5. [React 메뉴얼](https://facebook.github.io/react/docs/component-api.html) 에서도  this.state를 직접 수정하지 말고 this.setState()를 사용하여 수정 할 것을 강조합니다.

#### 1. state 원소 삽입

```
this.setState({
    list: this.state.list.concat(newObj)
})
```
 - [concat](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) 을 사용함으로서 현재의 list 배열에 newObj 원소를 추가한 새로운 배열을 생성 한 후, 그 값을 현재의 list 로 설정합니다.
 - 배열을 수정 할 땐 원시적인 방법으론 위와 같이 배열 전체를 복사하고
 처리 후 기존 값에 덮어씌우는 과정을 거쳐야 합니다.
 허나, 만약에 배열의 크기가 클 땐 성능이 좀 저하될 수 있습니다.
 - 다른 방법으로는 [Immutability Helpers](Immutability Helpers) 를 사용하는 방법이 있습니다.
 이는 배열을 더 효율적으로 수정 할 수 있게 해주는 페이스북의
 [Immutable-js](https://facebook.github.io/immutable-js/docs/#/)  를 사용합니다.
 (이를 사용하려면 라이브러리를 사전 설치해주어야 합니다.)

```
import update from 'react-addons-update'

this.setState({
    list: update(
              this.state.list,
              {
                  $push: [newObj, newObj2]
              }
});
```
- update() 메소드의 첫 파라미터는 처리 할 배열이며 두번째는 처리 할 명령들을 지니고 있는 객체 타입입니다.
- $push: [newObj, newObj2]는 list 배열에 newObj 와 newObj2 를 추가해줍니다.
- 한 객체를 추가 할 때도 [ ] 안에 배열형태로 감싸줘야합니다.
- Immutable-js 의 syntax 는 MongoDB 쿼리 언어에서 영감을 받았다고 합니다.
- 브라우저상에서 react-with-addons를 불러와서 사용하는 경우에는 update 가 아닌
 React.addons.update 를 사용해야합니다. (jsfiddle이 이에 해당합니다.)(언급했지만 ... react-with-addons 는 따로 받아와야함)

#### 2. 원소 제거
원소를 제거 할 때 역시, state 의 배열에 직접 접근하면 안 되고,
배열을 복사한 후 원소 제거 후 기존 값에 덮어씌워져야합니다.
JavaScript Array의 내장 함수인 splice()를 사용하면 되지만,
이는 생략하고 더 효율적인 Immutability Helper를 사용하는 예제를 알아보겠습니다.

```
this.setState({
    list: update(
      this.state.list,
      {$splice: [[index, 1]]}
      // 위 코드는 list 배열의 index번째 아이템부터 시작해서 1개의 만큼의 데이터를 제거합니다.
    )
});
```
-
-

#### 3. 원소 수정
```
this.setState({
    list: update(
        this.state.list,
        {
            [index]: {
                field: { $set: "value" },
                field2: { $set: "value2" }
            }
            // 위 코드는 list 배열의 index 번째 아이템의 field 와 field2 의 값을 변경합니다.
        }
    )
});
```

## state 예제 적용하기
1. ContactCreator: Contact 를 생성하는 컴포넌트
2. ContactRemover: Contact 를 제거하는 컴포넌트
3. ContactEditor: Contact를 수정하는 컴포넌트











//
