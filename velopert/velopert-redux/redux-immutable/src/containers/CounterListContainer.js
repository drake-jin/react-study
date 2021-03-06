import CounterList from '../components/CounterList'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { getRandomColor } from '../utils'


/*
  // store 안의 state 값을 props 로 연결해줍니다.
*/
const mapStateToProps = (state) => ({
  counters: state.get('counters'),
})


const mapDispatchToProps = (dispatch) => ({
  onIncrement: (index) => dispatch(actions.increment(index)),
  onDecrement: (index) => dispatch(actions.decrement(index)),
  onSetColor: (index) => {
    const color = getRandomColor()
    console.log(color);
    dispatch(actions.setColor({ index, color }))
  }
})

const CounterListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterList)

export default CounterListContainer
