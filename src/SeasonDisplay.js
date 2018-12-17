import React from  'react';

const getSeason = (lat, month) =>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    }else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth())
    return(
        <div>
            <h1>Season display</h1>
            <p>{season}</p>
        </div>
    )
}

export default SeasonDisplay;