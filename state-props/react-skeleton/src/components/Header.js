import React from 'react';


class Header extends React.Component {
  render(){
    return (
      /* <h1>Header</h1> */
      <h1>{ this.props.title }</h1>
    );

  }
}



export default Header;
