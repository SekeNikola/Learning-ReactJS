import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component{
    //* Alternative way to give state beacuse Babel will compile in constructor method
    state = { lat: null, errorMessage: ''}

    // ?  LIFECYCLE
    //* componentDidMount will be called one time when component renders on screen
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
         );
    }

    //* componentDidUpdate after components rerender and update itself, Right before componentDidUpdate Render method will be called
    componentDidUpdate(){
        console.log('My component was just updated and rerendered!');
    }
    //* componentWillUnmount stops componentDidMount

    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && !this.state.lat){
            return <div>Loading...</div>
        }

        return <div><SeasonDisplay lat={this.state.lat}/> </div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))