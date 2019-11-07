import React from 'react';
import moment from 'moment'


const CardTitle = props => {
    const {title, date} = props;
    const dateTitle =  moment(date).format('dddd, MMMM Do YYYY');
    return(
        <section className="card-title-container">
            <h1 className="card-title-header">{title}</h1>
            <h2 className="card-title-date">{dateTitle}</h2>
        </section>
    )
}

export default CardTitle;