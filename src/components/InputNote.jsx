import React, { useState } from 'react';
// Documentation suggests
// import DeleteIcon from '@mui/icons-material/Delete';
// Do not use @mui/icons-material/Delete
// Instead, use @material-ui/icons/Delete
// as a path.
import AddCircleIcon from '@material-ui/icons/AddCircle';

import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

const InputNote = (props) => {

    const [ inputData, setInputData ] = useState({
        inputAreaText: '',
        textAreaText: ''
    });

    const typeNoteFunc = (e) => {
        // Input name and input value for title typing
        const { name, value } = e.target;

        name === 'inputArea' ? 
            setInputData({...inputData, inputAreaText: value}) :
            setInputData({...inputData, textAreaText: value});
    }

    return(

        <section id="note-input">
            <form onSubmit={(e) => {
                // This prevents submit button from refreshing
                // webpage.
                e.preventDefault();
                props.handleClick(inputData);
                setInputData({
                    inputAreaText: '',
                    textAreaText: ''
                });
            }}>
                <input 
                    type="text" 
                    name="inputArea" 
                    placeholder="Title" 
                    onChange={typeNoteFunc} 
                    value={inputData.inputAreaText} 
                />

                <textarea 
                    type="text" 
                    name="textArea" 
                    placeholder="Take a note..." 
                    onChange={typeNoteFunc} 
                    value={inputData.textAreaText}
                />
                <div className="btn-container">
                     <Zoom className="fab-btn" in={true}>
                        <Fab type="submit"><AddCircleIcon /></Fab>
                    </Zoom>
                </div>
                
            </form>
        </section>
    );
}

export default InputNote;