import React from 'react';

const PrimaryBtn = ({children}) => {
    return (
        <button className="btn text-white btn-primary bg-gradient-to-r from-primary to-secondary mt-5 ">
        {children}
      </button>
    );
};

export default PrimaryBtn;