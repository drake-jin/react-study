# 참고주소

https://velopert.com/3354

이 Git의 저작권은 위 웹 사이트를 운영하는 사람에게 있습니다.

#Redux Immutable.js

Immutable.js 는 자바스크립트상에서 **불변성**의 데이터를 다루는것을 도와주는 라이브러리 입니다. 

#객체의 불변성?

Object 의 변수는 다른 변수로 대입을 할 때 원본의 주소값만 전달이되어, 원본을 이용해 만든 변수를 수정하면 원본도 같이 수정하게 되는 성질을 말한다.


``` js

// ******* Create objects 
let obj1 = {a:1, b:2}
// output: undefined
let obj2 = {a:1, b:2}
// output: undefined
obj1 === obj2
// output: false


// ******* create variable use substitution
let obj3 = obj1
// output: undefined
obj3 === obj1
// output: true

// ****** Both obj1 and obj3 share same Object, based on obj1. So If you change obj1, A obj3 will be changed by processing obj1
obj1.c = 3
// output: 3
obj1
// output: {a: 1, b: 2, c: 3}
obj3
// output: {a: 1, b: 2, c: 3}
obj1 === obj3
// output: true

// ******* Thease objects are share same Variable Address. Therefore, If this variable that name obj3 is changed, obj1 will be changed too.
obj3.d = 4
// output: 4
obj3
// output: {a: 1, b: 2, c: 3, d: 4}
obj1
// output: {a: 1, b: 2, c: 3, d: 4}

// ******* But an obj2 maintained its keys and values. Cause' It's not share with obj1 and obj3. That's why obj2 has different address.
obj2
// output: {a: 1, b: 2}
```

이러한 결과는 Array의 형태에서도 똑같이 찾아볼 수 있습니다. Array Prototype도 결국에는 Object Prototype을 물려받는 자식노드이기 때문이죠.

``` js
let array1 = [0,1,2,3,4]
// output: undefined
let array2 = [0,1,2,3,4]
// output: undefined
array1 === array2
// output: false
array1
// output: (5) [0, 1, 2, 3, 4]
array2
// output: (5) [0, 1, 2, 3, 4]
array3 = array1
// output: (5) [0, 1, 2, 3, 4]
array1 === array3
// output: true
array3.push(5)
// output: 6
array1
// output: (6) [0, 1, 2, 3, 4, 5]
array3
// output: (6) [0, 1, 2, 3, 4, 5]
array1 === array3
// output: true
``` 
obj1(Origin)의 주소값을 obj3(Same Address with obj1)에 넣어서 제어를 하려고하면 객체의 불변성을 유지하지 않고 있다라고 표현한다.


즉 나는 obj1(Origin) 이나 array1(Origin)을 그대로 쓰지 않고 변형해서 쓴것과 변형하지 않은것 두 개를 전부 사용하여야 하는데, 자바스크립트에서는 새로운 Object를 생성해주지 않기 때문에 참된 복사의 의미가 아니다. 


새로운 객체를 생성할때 각각의 주소값을 갖도록 복사하는 방법이 무엇이 있을까?

#객체의 불변성을 유지한 Object Copy

```js
let origin = {a:1, b:2, c:3}
// output: undefined
let copier = {...origin} 
// output: undefined
copier
// output: {a:1, b:2, c:3}
origin === copier
// output: false
copier.d = 4
// output: 4
copier
// output: (4) {a:1, b:2, c:3, d:4 }
origin
// output: (4) {a:1, b:2, c:3 }
```

#객체의 불변성을 유지한 Array Copy

```js
let ary1 = [1,2,3,4,5];
let ary2 = [1,2,3,4,5];
let ary3 = ary1
ary1 === ary2
// output: false
ary1 === ary3
// output: true
ary1.push(1)
// output: 6
ary1 === ary3
// output: true
ary1
// output: (6) [1, 2, 3, 4, 5, 1]
ary3
// output: (6) [1, 2, 3, 4, 5, 1]

ary1.slice(0, ary1.length)
// output: (6) [1, 2, 3, 4, 5, 1]
let ary4 = ary1.slice(0, ary1.length)
// output: undefined

// ********* 다른 객체가 생성되었다.
ary4 === ary1
// output: false
ary4
// output: (6) [1, 2, 3, 4, 5, 1]
ary1
// output: (6) [1, 2, 3, 4, 5, 1]
```



