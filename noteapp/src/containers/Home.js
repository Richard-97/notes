import React, { Component } from 'react';
import Header from '../components/Header';
import Note from '../components/Note';
import Modal from '../components/Modal';

export default class Home extends Component {

    state = {
        showModal: false,
        notes: [],
        modal_note: null, 
        modal_type: '',
        finder: '',
    }
    onNoteOpenHandler = (note) => {
        this.setState({ showModal: true, modal_note: note, modal_type: 'open' })
    }
    onNoteEditHandler = (note) => {
        this.setState({ showModal: true, modal_note: note , modal_type: 'edit'})
    }
    onNoteDeleteHandler = async (note) => {
        const del = await fetch(`http://localhost:5000/notes/${note.id}`, {method: 'DELETE'});
        const notes = await del.json();
        this.setState({ notes })
    }
    initialsName = (string) => {
        if(!string.includes(' ')){
            return string[0]
        }
        const name = string.split(' ');
        return `${name[0][0]} ${name[1][0]}`;
    }
    renderNotesHandler = (notes) => {
        return notes.map((note, i)=>{
            if(this.state.finder === '')
                return <Note 
                        title={note.title}
                        user_initals={this.initialsName(note.user)}
                        description={note.description} 
                        onOpen={()=>this.onNoteOpenHandler(note)}
                        onEdit={()=>this.onNoteEditHandler(note)}
                        onDelete={()=>this.onNoteDeleteHandler(note)}
                        key={i}
                        />
            else{
                if(note.title.includes(this.state.finder)){
                    return <Note 
                        title={note.title}
                        user_initals={this.initialsName(note.user)}
                        description={note.description} 
                        onOpen={()=>this.onNoteOpenHandler(note)}
                        onEdit={()=>this.onNoteEditHandler(note)}
                        onDelete={()=>this.onNoteDeleteHandler(note)}
                        key={i}
                        />
                }
            }

            })
    }
    async componentDidMount() {
        const notes = await fetch('http://localhost:5000/notes');
        const data = await notes.json();
        this.setState({ notes: data })
    }
    cancelModalWindow = () => {
        console.log('cancel')
        this.setState({modal_note: null, showModal: false})
    }
    saveEditNote = async (title, desc, author, id) => {
        const edited = await fetch('http://localhost:5000/notes',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title, author, desc, id
            })
        })
        const notes = await edited.json()
        this.setState({ notes, modal_note: null, showModal: false })
    }
    onFinderChangeHandler = (string) => {
        this.setState({ finder: string })
    }
    render() {
        return (
                <div className='home'>
                    <Header onChange={this.onFinderChangeHandler}/>
                        <div className='home-notes'>
                            {
                                this.renderNotesHandler(this.state.notes)
                            }
                        </div>
                    {this.state.showModal && <Modal note={this.state.modal_note} cancelModal={this.state.modal_type === 'open'? this.cancelModalWindow : this.saveEditNote} type={this.state.modal_type} />}
                </div>
        
            
        )
    }
}
