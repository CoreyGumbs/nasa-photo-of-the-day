import React from 'react';
import CardTitle from './CardTitle/CardTitle';
import CardImage from './CardImage/CardImage';

const Card = props =>{
     const {date, title, explanation, hdurl, url, } = props.data;

     //loading card data
     if(!hdurl) return <h3 className="loading">Loading...</h3>

    return(
        <article className="card">
            <CardTitle title={title} date={date}/>
            <CardImage imgSrc={hdurl} title={title} />
        </article>
    )
}

export default Card;