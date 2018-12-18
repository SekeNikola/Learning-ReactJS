import './seasonDisplay.css'
import React from  'react';

//* Refactoring ternary expressions
const seasonConfig ={
    summer:{
        text: 'Lets hit the beach',
        iconName: 'sun'
    },

    winter:{
        text: 'Brrrrr its cold',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) =>{
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter'
    }else{
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth())
    //* We refactor this
    // const text = season === 'summer' ? 'Lets hit the beach' : 'Brrrr its cold'
    // const icon = season === 'summer' ? 'sun' : 'snowflake'
    const {text, iconName} = seasonConfig[season] //{text, iconName}
    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
           <h1>{text}</h1>
           <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    )
}

export default SeasonDisplay;