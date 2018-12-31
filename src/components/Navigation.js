import React, { Component } from 'react';
import './Navigation.css';

const Navigation = ({ index, navigate, max }) => {
    return (
        <div className="navigationContainer">
            <button 
                className={index === 0 ? 'hidden' : 'prev'} 
                onClick={() => navigate(index - 2)}
            >
                prev
            </button>
            <button 
                className={index + 2 >= max ? 'hidden' : 'next'} 
                onClick={() => navigate(index + 2)}
            >
                next
            </button>
        </div>
    );    
};

export default Navigation;
