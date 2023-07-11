import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loader">
            <div style={{ '--i': 1 }}></div>
            <div style={{ '--i': 2 }}></div>
            <div style={{ '--i': 3 }}></div>
            <div style={{ '--i': 4 }}></div>
        </div>
    )
}

export default Loading