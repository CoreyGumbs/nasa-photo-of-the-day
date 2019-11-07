import React from 'react';
import CardTitle from './CardTitle/CardTitle';
import CardImage from './CardImage/CardImage';

const Card = props =>{
     const {date, title, explanation, hdurl, url, } = props.data;
     
    return(
        <section className="card">
            <CardTitle title={title} date={date}/>
            <CardImage imgSrc={hdurl} title={title} />
        </section>
    )
}

export default Card;