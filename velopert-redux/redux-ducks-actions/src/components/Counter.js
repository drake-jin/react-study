import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, index, onIncrement, onDecrement, onSetColor}) => {
    console.log(color)
    return (
        <div 
            className="Counter" 
            onClick={()=>onIncrement(index)} 
            onContextMenu={
                (e) => { 
                    e.preventDefault(); 
                    onDecrement(index);
                }
            } 
            onDoubleClick={()=>onSetColor(index)}
            style={{backgroundColor: color}}>
                {number}
        </div>
    );
};

Counter.propTypes = {
    number: PropTypes.number,
    index: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    index: 0,
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;