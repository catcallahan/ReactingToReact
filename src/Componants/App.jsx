import React, { Component } from 'react';

class App extends Component {
    state = {
        text: 'whatever text you enter in the box below.',
        hasLoaded: false,
    }
    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }
    // componentDidMount = () => this.setState({hasLoaded: true})

    handleClick = () => this.setState({hasLoaded: true})
    
    render() {
        if (this.state.hasLoaded === true) {
            return (
                <React.Fragment>
                    <h1>Hello {this.props.name} you are supposed to talk about {this.state.text}</h1>
                    <input type="text" placeholder={this.state.text} onChange={this.handleChange} />
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <h1> Loading ...</h1>
                    <button onClick={this.handleClick}>Start</button>
                </React.Fragment>
            )
        }
    }
}




// function App(props) {
//     return <h1> Hello {props.name}</h1>
// };

export default App;
