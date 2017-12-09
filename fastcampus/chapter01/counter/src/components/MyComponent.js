import React, { Component } from 'react';
import './MyComponents.css'

class MyComponents extends Component{

  state = {
    lastname: "",
    firstname: "",
    names: []
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = () => {
    const {lastname, firstname, names } = this.state

    this.setState({
      names: [...names, `${lastname} ${firstname}`],
      lastname: '',
      firstname: '',
    })
    this.lastnameInput.focus()
  }

  handleKeyPress = (e) => {
    // ref를 사용하는건 직접 도메인에 접근하기위해 사용하는데 css나 프로그래밍 외 적으로 활용하는것을 추천하고 프로그래밍적으로 이용하는것은 가급적 지양한다.
    // ref는 스크롤 탑, 포커스 온 등등.
//    e.target.keyCode === 'Enter' ? ''
  }

  render() {
    const { handleChange, handleClick, handleKeyPress } = this
    const { lastname, firstname, names } = this.state
    return (
      <div className="panel">
        <input
          name="lastname"
          placeholder="성"
          type="text"
          onChange={handleChange}
          value={lastname}
          onKeyPress={handleKeyPress}
          ref={(ref) => this.lastnameInput = ref}
          />
        <input
          name="firstname"
          placeholder="이름"
          type="text"
          onChange={handleChange}
          value={firstname}
          onKeyPress={handleKeyPress}
          />
        <button onClick={handleClick}> 등록</button>
        {names.map( (value, key) => (<div key={ key }> 이름:  {value} </div>) )}
        {/* 
        인덱스를 키로(프로그래밍적) 사용하는것은 추천하지 않는다., 리엑트가 돔 객체를 찾을때 iterator로 등록한 객체를 찾으려 할때 
        key가 필요하기 때문에 넣어준다.
        */}
      </div>
    )
  }
}

export default MyComponents;