import React, { Component } from 'react';
import Button2 from '../components/Button2';

import LanContext from '../Context/index';

export default class NewNote extends Component {
    state = {
        title: '',
        author: '',
        desc: '',
        error: false,
        lan: 'CZ'
    }
    createNewNote = async (title, author, desc) => {
        if(title === '' || author === '' || desc === ''){
            this.setState({ error: true })
            return;
        }
        this.setState({error: false})
        await fetch('http://localhost:5000/notes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title, author, desc
            })
        })
    }
    render() {
        return (
            
            <LanContext.Consumer>{ (value)=>(
                <div className='newNote'>
                    <div className='newNote-box'>
                        <input type='text' placeholder={value === 'EN'?'title of new note':'název nové úlohy'} onChange={(e)=>this.setState({ title: e.target.value })} />
                        <input type='text' placeholder={value === 'EN'?'surname and lastname':'kstné jméno a příjmení'} onChange={(e)=>this.setState({ author: e.target.value })}/>
                        <textarea onChange={(e)=>this.setState({ desc: e.target.value })}/>
                        <Button2 title={value === 'EN'?'Create':'vytvořit'} link='/' onClick={()=>this.createNewNote(this.state.title, this.state.author, this.state.desc)}/>
                    </div>
                    {this.state.error && <p className='newNote-error'>{value === 'EN'?'Fill all inputs': 'Vyplňte všechny údaje'}</p>}
                </div>
            )}</LanContext.Consumer>
        )
    }
}
