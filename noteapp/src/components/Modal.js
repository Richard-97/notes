import React, {useState} from 'react';
import Button2 from '../components/Button2';

import LanContext from '../Context/index';

export default function Modal({ note, cancelModal, type }) {
    const [title, setTitle] = useState(note.title);
    const [author, setAuthor] = useState(note.user);
    const [desc, setDesc] = useState(note.description);

    if(type === 'open')
        return (
            <LanContext.Consumer>{ (value)=>(
                <div className='modal'>
                    <div className='modal-box'>
                        <h3>{value === 'EN'? 'Title: '+note.title : 'Název: '+note.title}</h3>
                        <p>{value === 'EN' ? 'Description: '+note.description : 'Popis: '+note.description}</p>
                        <p>{value === 'EN' ? 'Author: '+note.user : 'Autor: '+note.user}</p>
                        <div style={{display: 'flex', alignItems: 'center',justifyContent: 'center', width: '100%'}}>
                            <Button2 title='OK' onClick={cancelModal}/>
                        </div>
                    </div>
                </div>
            )}</LanContext.Consumer>
        )
    return(
        <LanContext.Consumer>{ (value)=>(
            <div className='modal'>
                <div className='modal-box-edit'>
                        <input type='text' value={title} placeholder={ value==='EN'?'title of new note': 'Název nové úlohy'} onChange={(e)=>setTitle(e.target.value)} />
                        <input type='text' value={author} placeholder={ value==='EN'?'name of author': 'Jméno autora'} onChange={(e)=>setAuthor(e.target.value)}/>
                        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                    <Button2 title='OK' onClick={()=>cancelModal(title, desc, author, note.id)}/>
                </div>
            </div>
        )}</LanContext.Consumer>
    )
}
