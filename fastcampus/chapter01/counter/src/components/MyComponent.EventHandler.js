import React, { Component } from 'react';


class MyComponents extends Component{

  constructor(props){
    super(props)
    this.state = {
      number: 0
    }
  }


  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  render(){
    const { handleClick } = this
    return (
      <div>
        <div className="counter"> 
          {this.state.number}
        </div>
        <a href="https://www.google.com" onClick={(e)=>{e.preventDefault()}} >안녕?</a>
        <div className="controller">
          <button onClick={handleClick}>
            클릭해라 쫌 ㅋㅋ
          </button>
        </div>
      </div>
    )
  }
}

export default MyComponents;