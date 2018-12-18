import React from 'react';

class SearchBar extends React.Component {
    //! Uncontrol Element
// onInputChange(event){
//      console.log( event.target.value );
// }

//? Control Element
    state = { term: ''}

    onFormSubmit = (event) =>{
        event.preventDefault()
        this.props.onSubmit(this.state.term)
    }
    render() {
        return (
            //! Uncontrol Element
            // <div className="ui segment">
            //     <div className="field"></div>
            //     <form className="ui form" action="">
            //         <div className="field">
            //             <label htmlFor="searcbar">Search for image</label>
            //             <input type="text" onChange={this.onInputChange} />

            //             {/* Alternate way to handler syntax */}
            //             {/* <input type="text" onChange={(event) => console.log(event.target.value)}/> */}
            //         </div>
            //     </form>
            // </div>


            //? Control Element
            <div className="ui segment">
            <div className="field"></div>
            {/* <form onSubmit={(event) => {event.preventDefault()}} className="ui form" action=""> */}
            <form onSubmit={this.onFormSubmit} className="ui form" action="">
                <div className="field">
                    <label htmlFor="searchbar">Search for image</label>
                    <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar