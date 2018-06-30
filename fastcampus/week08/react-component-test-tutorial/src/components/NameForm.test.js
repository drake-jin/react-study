import React from 'react';
import { shallow } from 'enzyme';
import NameForm from './NameForm';

describe('NameForm', () => {
  let component = null;
  
  // 테스트용 onInsert 함수. changed 값을 바꿔줌
  let changed = null;
  const onInsert = (name) => {
    changed = name;
  }
  it('renders correctly', () => {
    component = shallow(<NameForm onInsert={onInsert}/>)
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  })
  describe('insert new text', () => {
    it('has a form', () => {
      expect(component.find('form').exists()).toBe(true)
    })

    it('has a input', () => {
      expect(component.find('input').exists()).toBe(true)
    })

    it('simulates input changes', () => {
      const mockedEvent = {
        target: {
          value: 'hello'
        }
      }
      // 이벤트를 시뮬레이트 한다. 두 번째 파라미터는 이벤트 객체이다.
      component.find('input').simulate('change', mockedEvent);
      expect(component.state().name).toBe('hello');
    })
    
    it('simulate form submit', () => {
      const mockedEvent = {
        preventDefault: () => null
        // on Submit 에서 preventDefault() 를
        // 호출하게 되므로, 가짜 함수를 추가한다.
      };
      component.find('form').simulate('submit', mockedEvent);
      expect(component.state().name).toBe('');// 등혹하면 값이 공백으로 변한다.
      expect(changed).toBe('hello')
    })
  })
})