import React from 'react';


const CardImage = props => {
    const {imgSrc, title} = props;
    
    return(
        <div className="card-image-container">
            <img src={imgSrc} alt={title} className="card-image"/>
        </div>
    )
}

export default CardImage;