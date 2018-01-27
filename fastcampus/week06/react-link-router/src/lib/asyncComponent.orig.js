
// getComponent is a function that returns a promise for a component
// It will not be called until the first mount
function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };
    // 처음 불러 올때에는 Component가 처음에는 null로써 들어가 있지만, 값이 채워진다면 
    // Compoent가 static으로 선언되어있어 다시 불러오지 않는다. 

    componentWillMount() { // 컴포넌트가 마운트 될때에
      if (!this.state.Component) { // 자신의 상태에 컴포넌트가 들어 있다면, getComponent로 컴포넌트를 불러 올 것이고
        getComponent().then(Component => { 
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render() { 
      const { Component } = this.state
      if (Component) { // 컴포넌트가 존재한다면, 컴포넌트를 랜더링 해주고
        return <Component {...this.props} />
      }
      return null
    }
  }
}

const Foo = asyncComponent(() =>
  System.import('./Foo').then(module => module.default)
)
const Bar = asyncComponent(() =>
  System.import('./Bar').then(module => module.default)
)

const App = () =>
  <BrowserRouter>
    <Link to="/foo">Foo</Link>
    <Link to="/bar">Bar</Link>

    <Match pattern="/foo" component={Foo} />
    <Match pattern="/bar" component={Bar} />
  </BrowserRouter>

export default App