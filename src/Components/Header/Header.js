
import { Button } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Header.css'
import '../Restaurant/Restaurant';
import CardU from '../Card/CardU';

const Header = () => {
    const headerLink ={
        textDecoration:'none',
        fontSize:'18px',
       fontWeight:'700'
    }
    const activeStyle ={
        color:"red",
        fontWeight:'900',
        borderBottom:'3px solid gray'
    }
   

    



    return (
        <div className='header'>
        <div className="linkContainer">
      
        <NavLink  style={headerLink} to='/'>Home</NavLink>

            <NavLink activeStyle={activeStyle} style={headerLink} to="/about">About</NavLink>
            <NavLink activeStyle={activeStyle} style={headerLink} to='/food'>Food Details</NavLink>
            <NavLink activeStyle={activeStyle} style={headerLink}to='/restaurant'>Restaurant</NavLink>
         
        </div>
        </div>
    );
};

export default Header;