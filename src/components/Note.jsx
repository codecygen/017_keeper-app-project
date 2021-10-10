import React from 'react';
// Documentation suggests
// import DeleteIcon from '@mui/icons-material/Delete';
// Do not use @mui/icons-material
// Instead, use @material-ui/icons/
// as a path.
import DeleteIcon from '@material-ui/icons/Delete';

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
                    ><DeleteIcon /></button>
            </div>
        </section>
    );
}

export default Note;