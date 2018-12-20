import React from 'react';

class SearchForm extends React.Component{
    state = { term: '' }

    handleChange = event =>{
        this.setState({term: event.target.value})
        // console.log(event.target.value);
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.props.onUserSubmit(this.state.term)
    }
    render(){
    return(
        <div>
            <div className="form-group">
            <form  onSubmit={this.handleSubmit} action="">
            <h1 className="text-center">Search for any video you want</h1>
            <input value={this.state.value} onChange={this.handleChange} className="form-control" type="text" placeholder="Search for videos"/>
            </form>
            </div>
        </div>
    )
    }
}


export default SearchForm