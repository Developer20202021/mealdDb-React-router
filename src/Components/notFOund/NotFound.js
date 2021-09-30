import { Button } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    const style ={
        textDecoration:'none',
        fontSize:'18px',
        fontWeight:'700',
        color:'white'
    }
 
    return (
        <div>
          <div className="notFoundPageContainer">
              <p className='number'>
                  404
              </p>
              <p className='opps'>
                OPPS! PAGE NOT FOUND
              </p>
              <p className='normalText'>
                Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
              </p>
              <div className="buttonContainer">
                   <span> <Button variant="contained" color="success">
                   <NavLink   to='/'
                   style={style}>RETURN HOME</NavLink></Button></span>
                    <span>
                   <Button  variant="contained" color="error"><Link to='/report'  style={style}>REPORT PROBLEM</Link></Button>
                    </span>
              </div>
          </div>
        </div>
    );
};

export default NotFound;