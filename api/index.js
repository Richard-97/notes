const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


let notes = [
    {
        id: 1,
        title: 'Create new ReactJS app',
        description: 'Create new application because the old one is so old.',
        user: 'Ivan Mraz'
    },
    {
        id: 2,
        title: 'Create new NodeJS app',
        description: 'Create new api with nodejs.',
        user: 'John Wick'
    }
]

app.get('/notes', (req, res)=>{
    res.status(200).json(notes)
})
app.get('/notes/:id', (req, res)=>{
    res.status(200).json(notes[0])
})
app.post('/notes', (req, res)=>{
    const {title, desc, author} = req.body;
    let last_note = [...notes].pop();
    
    notes.push({
        id: notes.length === 0 ? 1 : last_note.id+1,
        title,
        description: desc,
        user: author
    })
    res.status(200)
})
app.put('/notes', (req, res)=>{
    const {id, title, desc, author} = req.body;
    notes.map((note, i)=>{
        if(note.id === id){
            notes[i] = {id, title, description:desc, user: author}
        }
    })
    res.status(200).json(notes)
})
app.delete('/notes/:id', (req, res)=>{
    const { id } = req.params;
    notes.map((note, i)=>{
        if(note.id === Number(id)){
            notes.splice(i, 1);
        }
    })
    res.status(200).json(notes)
})

app.listen(5000, ()=>{
    console.log('app is running on port 5000');
});
