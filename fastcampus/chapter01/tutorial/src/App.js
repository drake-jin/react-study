import React, { Component } from 'react'
import Row from './components/Row'
import MyProfile from './components/MyProfile'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const name = 'drakejin'
    return (
      <div className="App">
        <h1>안녕</h1>
        <h2>하세용</h2>
        <h2 className="hello">내 이름은</h2>
        <h2>{name}</h2>
        <h2>{1 + 1 === '귀요미' ? '안귀여움' : '귀요미'}</h2>
        <h2>{(() => (1 + 1 === '귀요미' ? '아아앙귀요미' : '귀요밍'))()}</h2>
        <Row attr="이름" value="도라에몽" />
        <Row attr="직업" value="뀨뀨뀨뀨" />
        <Row attr="나이" value="26" />
        <MyProfile
          name="조용진"
          job="백수"
          age={1}
          favoriteNumber={2}
        >
          기타 등등
        </MyProfile>
      </div>
    )
  }
}

export default App
