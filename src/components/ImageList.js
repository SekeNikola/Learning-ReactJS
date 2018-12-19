import React from 'react';
import './ImageList.css';
import ImageCards from './ImageCards';

const ImageList = (props) =>{
    // console.log(props.images);

    const images = props.images.map((image) =>{
        return <ImageCards key={image.id}  image={image}/>
    })
    return(
        <div className="image-list">
            {images}
        </div>
    )
};

export default ImageList