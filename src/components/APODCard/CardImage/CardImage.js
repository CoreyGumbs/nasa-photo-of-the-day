import React from 'react';
import {CardImageContainer, CardImageOfDay, CardImgSource, CardImgSourceLink} from '../StyledComponents/CardStyles';

const CardImage = props => {
    const {imgSrc, title, url} = props;
    
    return(
        <CardImageContainer>
            <CardImageOfDay src={imgSrc} alt={title} />
            <CardImgSource>Source: <CardImgSourceLink href={url}>NASA</CardImgSourceLink></CardImgSource>
        </ CardImageContainer>
    )
}

export default CardImage;