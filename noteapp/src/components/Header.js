import React from 'react';
import Button from '../components/Button';

import LanContext from '../Context/index';

export default function Header({onChange}) {
    return (
        <LanContext.Consumer>{ (value)=>(
                <header className='header'>
                    <input type='text' placeholder={value === 'EN' ? 'Find' : 'Hledat'} className='header-finder' onChange={(e)=>onChange(e.target.value)} />
                    <Button title={value === 'EN' ? '+ Add' : '+ Přidat'} link='/newNote' />
                </header>
        )}
        </LanContext.Consumer>
    )
}
