import React from 'react';

const SingleCard = ({card}) => {
    const {id,name,details,bg,icon} = card
    return (
        <div className={`card card-side  shadow-xl text-white px-6  ${bg}`}>
        <figure><img src={icon} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Click the button to watch on Jetflix app.</p>
          
        </div>
      </div>
    );
};

export default SingleCard;