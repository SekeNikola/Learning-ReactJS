import React from  'react';

import SearchBar from './searchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList'

class App extends React.Component{

    state = { images: [] };
    onSearchSubmit = async (term) =>{
        const response = await unsplash.get('https://api.unsplash.com/search.photos',{
            params:{query: term},
        });
            this.setState({images: response.data.photos.results})
    }
    render(){
        return(
            <div className="ui container " style={{marginTop: '20px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            Found: {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

export default App