import React from 'react';

const Note = (props) => {
    return(
        <section className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </section>
    );
}

export default Note;