import React from 'react';
import CardTitle from './CardTitle/CardTitle';

const Card = props =>{
     const {date, title, explanation, hdurl, url, } = props.data;
     
    return(
        <section className="card">
            <CardTitle title={title} />
        </section>
    )
}

export default Card;