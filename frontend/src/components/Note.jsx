import React from "react"


function Note({note, onDelete}) {
    const createDate = new Date(note.created_at);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const weekDay = weekDays[createDate.getDay()];
    const dayNum = createDate.getDate();
    const month = months[createDate.getMonth()];
    const year = createDate.getFullYear();

    return (
        <div className="note-container">
                <p className="note-title">{note.title}</p>
                <p className="content">{note.content}</p>
                <p className="note-date">{weekDay}, {dayNum} {month}, {year}</p>
                <button className="delete-button" onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );  
}

export default Note