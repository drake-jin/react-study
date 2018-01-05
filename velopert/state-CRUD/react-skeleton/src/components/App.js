import React from 'react';
import update from 'react-addons-update'

class App extends React.Component {
  render(){
    return (
      <div>
        <Contacts/>
      </div>
    );
  }
}

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    // 새로운 state 를 사용 할 땐, 언제나 초기 값을 설정해줘야합니다.
    this.state = {
      contactData: [
        {name: "Abet", phone: "010-0000-0001"},
        {name: "Betty", phone: "010-0000-0002"},
        {name: "Charlie", phone: "010-0000-0003"},
        {name: "David", phone: "010-0000-0004"}
      ],
      selectedKey: -1,//선택이 안되면 -1 되면 0이상의 숫자가 쌓임
      selected:{
        name: "",
        phone: ""
      }// 현재 선택한 값
    };
    // state 는 컴포넌트에서 유동적인 데이터를 다룰 때 사용됩니다.
  }
  _insertContact(name, phone){
    let newState = update(this.state, {
      contactData: {
        $push: [{"name": name, "phone": phone}]
      }
    });
    // update 메서드를 통해 this.state를 수정합니다.
    // 여기에서는 this.state의 값을 추가하였습니다. $push
    this.setState(newState);
  }


  _onSelect(key){
    // 이미 같은거 선택 시에
    if(key==this.state.selectedKey){
      console.log("key select cancelled");
      this.setState({
        sleectedKey:-1,
        selected:{
          name:"",
          phone:""
        }
      });

      return;
    }

    this.setState({
      selectedKey: key,
      selected: this.state.contactData[key]
    });
    console.log(key + " is selected");
  }
  /*
  _isSelect(key) 메소드는 child 컴포넌트에게 해당 컴포넌트가 선택된 상태인지 아닌지 알려줍니다.
  이 메소드를 실행 한 결과 값이 child 컴포넌트의 isSelected prop 으로 전달 됩니다.
  */
  _isSelected(key){
    if(this.state.selectedKey == key){
      return true;
    }else{
      return false;
    }
  }

  _removeContact(){
    if(this.state.selectedKey==-1){
      console.log("contact not selected");
      return;
    }

    this.setState({
      // update (업데이트할 대상, 어떻게 수정할건지?)
      contactData: update(
        this.state.contactData,
        {
          $splice: [[this.state.selectedKey, 1]]
        }
      ),
      selectedKey: -1
    });
  }

  _editContact(name, phone){
    this.setState({
      contactData: update(
        this.state.contactData,
        {
          [this.state.selectedKey]: {
            name: { $set: name },
            phone: { $set: phone }
          }
        }
      ),
      selected: {
        name: name,
        phone: phone
      }
    });
  }


  /*
  Immutability Helpers 를 사용하여 배열에 원소를 추가하였으며,
  _insertContact(name, phone) 메소드를 ContactCreator 의 prop 으로 전달 해 주었습니다.

  참고: jsfiddle 에선 React.addons.update 를 사용해아햡니다.
  */
  render(){
    return(
      <div>
        <h1>Contacts</h1>
        <ul>
      {this.state.contactData.map((contact, i) => {
        return (
          <ContactInfo
            name={contact.name}
            phone={contact.phone}
            key={i}
            contactKey={i}
            isSelected = {this._isSelected.bind(this)(i) }
            onSelect = {this._onSelect.bind(this) } />
        );
      })}
        </ul>
        <ContactCreator onInsert={this._insertContact.bind(this)}/>
        <ContactRemover onRemove={this._removeContact.bind(this)}/>
        <ContactEditor
          onEdit={this._editContact.bind(this)}
          isSelected={(this.state.selectedKey !=-1)}
          contact={this.state.selected} />
      </div>
    );
  }
}

class ContactInfo extends React.Component {
  handleClick(){
    this.props.onSelect(this.props.contactKey);
  }
  // 해당 컴포넌트가 클릭되면 handleClick() 메소드가 실행되며,
  // 이 메소드 내부에선 parent 컴포넌트에서 prop 으로 전달받은 onSelect() 메소드를 실행합니다.

  // 여기서 인수 contactKey 는 해당 컴포넌트의 고유 번호입니다.
  // !! 컴포넌트를 매핑할 때 key 를 사용하긴 하였으나, !!
  // !! 이는 prop으로 간주되지 않으며 React 내부에서 사용하는 용도이기에 직접 접근이 불가합니다. !!



  shouldComponentUpdate(nextProps){
      /*
      비 효율적인 코드.
      console.log("rendered: ");
      console.log(nextProps);
      */
      console.log((JSON.stringify(nextProps) != JSON.stringify(this.props)));
      return (JSON.stringify(nextProps) != JSON.stringify(this.props));
  }

  render() {
    let getStyle = isSelect => { //파라메터가 하나라면 소괄호를 쓰지않아도 된다.
      if(!isSelect) {return;} //false라면 그냥 메서드를 끝내라
      let style = {
        fontWeight: 'bold',
        backgroundColor: '#4efcd8'
      };
      return style;
    };

    return(
      <li
        style={getStyle(this.props.isSelected)}
        onClick={this.handleClick.bind(this)} >
        {this.props.name} {this.props.phone}
      </li>
    );
  }
}

class ContactCreator extends React.Component {
  constructor(props) {
    super(props);

    // CantactCreator에서 사용할 state를 초기화 합니다.
    this.state = {
      name: "",
      phone: ""
    };
  }
  handleChange(e){
    // e는 dom객체에서 일반적으로넘어오는 녀석이 아닌 Virtual DOM 이 넘어오는 것.
    var nextState = {};
    nextState[e.target.name] = e.target.value; // 이벤트 객체의 VirtualDOM의 정보가 날라온다.
    this.setState(nextState);
  }

  handleClick(){
    this.props.onInsert(this.state.name, this.state.phone);
    this.setState({
      name: "",
      phone: ""
    });
  }

  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}/>

          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange.bind(this)}/>

          <button onClick={this.handleClick.bind(this)}>Insert</button>
        </p>
      </div>
    );
    // 초기 state 값을 지정하고, 렌더링 부분 코드에서 input 의 value가 state를 사용하도록 수정한 후,
    // 인풋박스에 텍스트를 적으려고 시도해보면 값이 고정되서 변경되지 않습니다.
    // onKeyUp 도는 onKeyDown 이 안먹힘. 이 부분을 해결하기 위하여,
    // onChange 이벤트를 통하여 인풋박스에 텍스트를 입력 시 status 를 업데이트하도록 설정해야 합니다.

    /*
    handleClick() 에서는 parent 컴포넌트인 Contacts 에서 props 로
    받아온 메소드를 실행합니다. 그 후, 인풋 박스 값을 비웁니다.
    */
  }
}

class ContactRemover extends React.Component {
  handleClick() {
    this.props.onRemove();
  }
  /*
  버튼이 클릭되면 handleClick() 메소드가 실행 되며, 해당 메소드에선 parent 컴포넌트에서 전달 받은
  onRemove() 메소드가 실행됩니다.
  */
  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
      Remove selected contact
      </button>
    );
  }
}

class ContactEditor extends React.Component {
  constructor(props) {
    super(props);
    // Configure default state
    this.state = {
      name: "",
      phone: ""
    };
  }

  handleClick(){
    if(!this.props.isSelected){
      alert("contact not selected");
      return;
    }
    this.props.onEdit(this.state.name, this.state.phone);
  }

  handleChange(e){
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  /*
  이는 Component Lifecycle API 중 하나인 componentWillReceiveProps()를 사용하면됩니다.
  이 React.Component 내장메소드는, prop 값을 받게 될 때 실행되는 메소드입니다.
  */
  componentWillReceiveProps(nextProps){
    this.setState({
      name: nextProps.contact.name,
      phone: nextProps.contact.phone
    });
  }

  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChange.bind(this)}/>

          <input
            type="text"
            name="phone"
            placeholder="phone"
            value={this.state.phone}
            onChange={this.handleChange.bind(this)}/>
          <button onClick={this.handleClick.bind(this)}>
            Edit
          </button>
        </p>
      </div>
    );
  }
}

export default App;
