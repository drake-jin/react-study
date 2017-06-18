import React, {Component} from 'react';

import Header from './Components/Header';

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
            </div>
        );
    }
}

export default App;
