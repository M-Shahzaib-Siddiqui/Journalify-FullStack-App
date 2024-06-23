import { useState, useEffect, useRef } from 'react';
import api from "../api";
import Note from "../components/Note";
import DailyQuote from '../components/DailyQuote';
import NavBar from '../components/NavBar';
import "../styles/Home.css";
import "../styles/Note.css";

function Home() {
    const [notes, setNotes] = useState([]);
    const contentRef = useRef("");
    const titleRef = useRef("");

    useEffect(() => {
        getNotes();
    }, [])

    const getNotes = () => {
        api.get("/api/notes/")
        .then((res) => res.data)
        .then((data) => {setNotes(data);})
        .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api.delete(`/api/notes/delete/${id}/`)
        .then((res) => {
            if (res.status === 204) alert("Note Successfully Deleted!");
            else alert("Note Failed to Delete!");
            getNotes();
        })
        .catch((err) => alert(err));
    }

    const createNote = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const content = contentRef.current.value;
        api.post("/api/notes/", {title, content})
        .then((res) => {
            if (res.status === 201) alert("Note Created Successfully!");
            else alert("Note Failed to Create!");
            getNotes();
        })
        .catch((err) => alert(err))
    };

    function NoteCount ({noteNum}) {if (noteNum === 0) return(<h1>You Haven't Written Any Journals Yet...</h1>)}

    return (
        <>
        <div className='background'>
            <NavBar page="home"/>
            <DailyQuote className="quote-container"/>

            <form className="create" onSubmit={createNote}>
                <h2 className='heading'>New Entry</h2>
                <br/>
                <input ref={titleRef} type="text" id="title" name="title" required placeholder='Title'></input>
                <textarea ref={contentRef} id="content" name="content" required placeholder='Your Thoughts'></textarea>
                <br/>
                <input type="submit" value="Submit"></input>
            </form>

            <br/>

            <div className="journals-section">
                <h2 className='heading'>Your Journals!</h2>
                <div className="notes">
                    <NoteCount noteNum={notes.length}/>
                    {notes.map((note) => (
                        <Note note={note} onDelete={deleteNote} key={note.id}/>))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Home

