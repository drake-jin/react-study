import * as types from './ActionTypes'

export const increment = (index) => ({
  // index의 카운터를 증가시켜라.
  type: types.INCREMENT,
  index,
})

export const decrement = (index) => ({
  // index의 카운터를 감소시켜라.
  type: types.DECREMENT,
  index,
})

export const setColor = ({index, color}) => ({
  // index의 색상을 변경시켜라
  type: types.SET_COLOR,
  index,
  color,
})

/*
    action 객체를 만드는 액션 생성자들을 선언합니다. (action creators)
    여기서 () => ({}) 은, function() { return { } } 와 동일한 의미입니다.
    scope 이슈와 관계 없이 편의상 사용되었습니다.

    map( v => v+1 ) => map( v => { return v + 1 })

    Q.setColor 에서 렌덤하게 색상 변경할 껀데 이름이 왜 SET_COLOR? RANDOMIZE_COLOR 는 안되나? 
    A.리덕스의 3가지 원칙 중에서 변화는 언제나 순수(Pure) 함수로 이뤄져야 한다는 것, 
      기억나나요? 더블클릭을 하면 색이 랜덤으로 변하는거지만, 그렇다고 우리가 액션을 RANDOMIZE_COLOR, 
      randomizeColor 이런식으로 만들면 안됩니다. 왜냐구요? 랜덤함수는 실행될때마다 다른 값을 반환하기때문에 순수하지 않거든요.
*/


export const create = (color) => ({
  type: types.CREATE,
  color,
})

export const remove = () => ({
  type: types.REMOVE,
})