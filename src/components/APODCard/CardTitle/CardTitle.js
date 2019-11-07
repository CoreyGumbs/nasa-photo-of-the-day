import React from 'react';


const CardTitle = props => {
    const {title, date} = props;

    return(
        <section className="card-title-container">
            <h1 className="card-title-header">{title}</h1>
            <h2 className="card-title-date">{date}</h2>
        </section>
    )
}

export default CardTitle;