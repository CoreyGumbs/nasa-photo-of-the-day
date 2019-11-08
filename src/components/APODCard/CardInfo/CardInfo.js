import React from 'react';
import {CardInfoContainer, CardInfoText } from '../StyledComponents/CardStyles';

const CardInfo = props => {
    return(
        <CardInfoContainer>
            <CardInfoText>
                {props.explanation}
            </CardInfoText>
        </CardInfoContainer>
    )
}

export default CardInfo;