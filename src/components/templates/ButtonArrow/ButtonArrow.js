import React from 'react';
import arrow from '../../../assets/images/arrow.png';
import './button-arrow.css';


const ButtonArrow = ({name, href}) => {

    return(
        <div className="arrow-button">
            <a href={href}>{name}</a>
            <img src={arrow} alt='arrow' />
        </div>
    )
    
}

export default ButtonArrow;
