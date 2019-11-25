import React from 'react';
import { Link } from 'react-router-dom';

export default function Button2({ title, onClick, link }) {
    if(link === undefined){
        return <div className='button2' onClick={onClick}>
            {title}
        </div>
    }
    return (
        
        <Link to = {link} className = 'link'>
            <div className='button2' onClick={onClick}>
                {title}
            </div>
        </Link>
    )
}
