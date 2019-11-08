import React from 'react';
import moment from 'moment'
import {CardTitleContainer, CardTitleH1} from '../StyledComponents/CardStyles';


const CardTitle = props => {
    const {title, date} = props;
    const dateTitle =  moment(date).format('dddd, MMMM Do YYYY');
    return(
        <CardTitleContainer>
            <CardTitleH1>{title}</CardTitleH1>
            <h2 className="card-title-date">{dateTitle}</h2>
        </CardTitleContainer>
    )
}

export default CardTitle;