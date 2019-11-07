import React from 'react';

const CardInfo = props => {
    return(
        <section className="card-info-container">
            <p className="card-info-txt">
                {props.explanation}
            </p>
        </section>
    )
}

export default CardInfo;