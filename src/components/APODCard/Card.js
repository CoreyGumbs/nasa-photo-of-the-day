import React from 'react';
import CardTitle from './CardTitle/CardTitle';
import CardImage from './CardImage/CardImage';
import CardInfo from  './CardInfo/CardInfo';
const Card = props =>{
     const {date, title, explanation, hdurl, url, } = props.data;

     //loading card data
     if(!hdurl) return <h3 className="loading">Loading...</h3>

    return(
        <article className="card">
            <CardTitle title={title} date={date}/>
            <CardImage imgSrc={hdurl} title={title} url={url} />
            <CardInfo explanation={explanation}/>
        </article>
    )
}

export default Card;