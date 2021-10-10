import React from 'react';

const Note = (props) => {
    return(
        <section className="note">
            <h1>{props.inputAreaText}</h1>
            <p>{props.textAreaText}</p>
        </section>
    );
}

export default Note;