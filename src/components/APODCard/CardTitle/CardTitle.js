import React from 'react';


const CardTitle = props => {
    return(
        <div className="card-title-container">
            <h1 className="card-title-header">{props.title}</h1>
        </div>
    )
}

export default CardTitle;