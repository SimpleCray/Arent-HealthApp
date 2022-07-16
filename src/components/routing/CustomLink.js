import React from 'react';
import { NavLink } from 'react-router-dom';

const CustomLink = ({ to, text, Icon }) => {
    return (
        <div className='custom-link'>
            <NavLink to={to} className={(isActive) => 'nav-link' + (!isActive ? ' unselected' : '')}>
                {Icon && <Icon/>}
                {text}
            </NavLink>
        </div>
    );
};

export default CustomLink;
