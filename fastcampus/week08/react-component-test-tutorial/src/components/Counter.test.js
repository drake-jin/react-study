import React from 'react'
import renderer from 'react-test-renderer'
import Counter from './Counter'

describe('src/components/Counter.js', () => {
  let component = null;

  it('renders correctly', () => {
    component = renderer.create(<Counter />)
  })

  it('matches snapshot', () => {
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
  it('increase correctly', () => {
    component.getInstance().onIncrease()
    expect(component.getInstance().state.value).toBe(2);
    // count increase한 값이 2인지 확인
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
  it('decrease correctly', () =>{
    component.getInstance().onDecrease()
    expect(component.getInstance().state.value).toBe(1)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})