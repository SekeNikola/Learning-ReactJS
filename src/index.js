import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    constructor(props){
        super(props);

        // THIS IS ONLY TIME WE DO DIRECT ASSIGNMENT TO THIS.STATE
        this.state = {
            lat: null,
            errorMessage: ''
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // ALWAYS USE SETSTATE TO UPDATE  COMPONENT STATE
                this.setState({lat: position.coords.latitude})
            },
            //! NEVER DIRECT CHANGE STATE LIKE THIS
            // this.state.lat = position.coords.latitude
            err => {
                this.setState({errorMessage: err.message})
            }
         );

    }
    render(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && !this.state.lat){
            return <div>Loading...</div>
        }

        return <div>Latitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))