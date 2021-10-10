import React from 'react';

const Note = (props) => {
    return(
        <section className="note">
            <h1>{props.inputAreaText}</h1>
            <p>{props.textAreaText}</p>
            <div className="btn-container">
                    <button 
                        class="delete-btn" 
                        type="submit"
                        onClick={() => {
                            props.deleteNote(props.id);
                        }}
                    >Delete</button>
            </div>
        </section>
    );
}

export default Note;