import React from 'react';


class Content extends React.Component {
  render(){
    return (
      /*
      <div>
        <h2>Content</h2>
        <p> Hey! </p>
      </div>
      */


      <div>
          <h2>{ this.props.title }</h2>
          <p> { this.props.body } </p>
      </div>
    );
  }
}

//  참고 : https://facebook.github.io/react/docs/components-and-props.html
Content.propTypes={
  title: React.PropTypes.string,
  body: React.PropTypes.string.isRequired
};


/*
class ValidationExampleComponent extends React.Component {
  render(){
    return (
      <h1>{ this.props.title }</h1>
    );
  }
}

ValidationExampleComponent.propTypes = {

    // JS primitive types
    optionalArray: React.PropTypes.array,
    optionalBool: React.PropTypes.bool,
    optionalFunc: React.PropTypes.func,
    optionalNumber: React.PropTypes.number,
    optionalObject: React.PropTypes.object,
    optionalString: React.PropTypes.string,

    // anything that can be rendered ( numbers, string, elements, array, fragment)
    optionalNode: React.PropTypes.node,

    // React element
    optionalElement: React.PropTyps.element,

    // instance of specific class
    optionalMessage: React.PropTypes.instanceOf(Message),

    // limited to specific values
    optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

    // one of many types
    optionalUnion: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.propTypes.number
    ]),

    // array of specific type
    optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

    // object with property values of a certain type
    optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

    // object with particular shape
    optionalObjectWithShape: React.PropTypes.shape({
        color: React.PropTypes.string,
        fontSize: React.PropTypes.number
    }),

    // Required function
    requiredFunc: React.PropTypes.func.isRequired,

    // Required prop with any data type
    requiredAny: React.PropTypes.any.isRequired,

    // custom validator
    customProp: function(props, propName, componentName) {
      if (!/matchme/.test(props[propName])) {
        return new Error('Validation failed!');
      }
    }
};

*/

export default Content;
