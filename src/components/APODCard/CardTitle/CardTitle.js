import React from 'react';


const CardTitle = props => {
    const {title, date} = props;

    return(
        <div className="card-title-container">
            <h1 className="card-title-header">{title}</h1>
            <h2 className="card-title-date">{date}</h2>
        </div>
    )
}

export default CardTitle;