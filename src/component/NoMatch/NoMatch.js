import React from 'react';
import './NoMatch.css'

const NoMatch = () => {
    return (
        <div className='error '>
            <h1>Sorry!!</h1>
            <h3>The API i'm using that have no <span className='moreError'>SOCIAL MEDIA LINK</span></h3>
        </div>
    );
};

export default NoMatch;