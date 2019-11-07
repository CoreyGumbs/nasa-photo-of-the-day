import React from 'react';


const CardImage = props => {
    const {imgSrc, title, url} = props;
    
    return(
        <section className="card-image-container">
            <img src={imgSrc} alt={title} className="card-image" width='80%' height='80%'/>
            <p className="car-image-src">Source: <a className="car-image-src-url" href={url}>NASA</a></p>
        </section>
    )
}

export default CardImage;