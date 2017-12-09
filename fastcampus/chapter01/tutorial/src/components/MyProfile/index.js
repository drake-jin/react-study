import React, { Component } from 'react';
import Row from '../Row'

class MyProfile extends Component {


  render() {
    const {job, name, age, favoriteNumber, children} = this.props
    return (
      <div>
        <Row attr="이름" value={name}/>
        <Row attr="직업" value={job}/>
        <Row attr="나이" value={age}/>
        <Row attr="좋아하는 숫자" value={favoriteNumber}/>
        <div class="description">
          {children}
        </div>
      </div>
    );
  }
}


export default MyProfile;