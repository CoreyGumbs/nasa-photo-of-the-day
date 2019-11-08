import React from 'react';
import CardTitle from './CardTitle/CardTitle';
import CardDatePicker from './CardDatePicker/CardDatePicker';
import CardImage from './CardImage/CardImage';
import CardInfo from  './CardInfo/CardInfo';
import {ContentContainer} from './StyledComponents/CardStyles';

const Card = props =>{
    const {date, title, explanation, hdurl, url } = props.data;

    //loading card data
    if(!hdurl) return <h3 className="loading">Loading...</h3>

    return(
        <ContentContainer>
            <CardTitle title={title} date={date}/>
            <CardDatePicker addNewDate={props.addNewDate}/>
            <CardImage imgSrc={hdurl} title={title} url={url} />
            <CardInfo explanation={explanation}/>
        </ContentContainer>
    )
}

export default Card;