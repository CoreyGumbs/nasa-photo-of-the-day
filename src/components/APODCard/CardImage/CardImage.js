import React from 'react';
import {CardImageContainer} from '../StyledComponents/CardStyles';

const CardImage = props => {
    const {imgSrc, title, url} = props;
    
    return(
        <CardImageContainer>
            <img src={imgSrc} alt={title} className="card-image" width='80%' height='80%'/>
            <p className="car-image-src">Source: <a className="car-image-src-url" href={url}>NASA</a></p>
        </ CardImageContainer>
    )
}

export default CardImage;