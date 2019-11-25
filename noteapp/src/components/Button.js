import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ title, link }) {
    return (
        <Link to = {link} className = 'link'>
            <div className='button'>
                {title}
            </div>
        </Link>
    )
}
