import React from 'react';
import moment from 'moment'
import {CardTitleContainer, CardTitleHeading, CardTitleSubHeading} from '../StyledComponents/CardStyles';


const CardTitle = props => {
    const {title, date} = props;
    const dateTitle =  moment(date).format('dddd, MMMM Do YYYY');
    return(
        <CardTitleContainer>
            <CardTitleHeading>{title}</CardTitleHeading>
            <CardTitleSubHeading>{dateTitle}</CardTitleSubHeading>
        </CardTitleContainer>
    )
}

export default CardTitle;