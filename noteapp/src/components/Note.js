import React from 'react';
import ThemeContext from '../Context/index';

export default function Note({ user_initals, title, description, onOpen, onEdit, onDelete  }) {
    const stringCheck = (string, limit) => {
        if(string.length > limit) {
            string = string.substring(0,limit-1) + "...";
        }
        return string
    }
    return (
        <ThemeContext.Consumer>{ (value)=>(
            value==='EN' ?
                <div className='note'>
                    <div className='note-title'>
                        <h6>{ user_initals }</h6>
                        <div className='note-title__desc'>
                            <h3>{ stringCheck(title, 17) }</h3>
                            <p>{ stringCheck(description, 35) }</p>
                        </div>
                    </div>
                    <div className='note-edit'>
                        <p onClick={()=>onEdit(user_initals, title, description)}>Edit</p>
                        <p onClick={onOpen}>Open</p>
                        <p onClick={onDelete}>delete</p>
                    </div>
                </div>
            :
            <div className='note'>
                <div className='note-title'>
                    <h6>{ user_initals }</h6>
                    <div className='note-title__desc'>
                        <h3>{ stringCheck(title, 17) }</h3>
                        <p>{ stringCheck(description, 35) }</p>
                    </div>
                </div>
                <div className='note-edit'>
                    <p onClick={()=>onEdit(user_initals, title, description)}>opravit</p>
                    <p onClick={onOpen}>otevřít</p>
                    <p onClick={onDelete}>vymazat</p>
                </div>
            </div>
        )}</ThemeContext.Consumer>
    )
}
