import React, { useState } from 'react';

const InputNote = () => {

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
            <form /*onSubmit={addNote}*/>
                <p>{inputData.inputAreaText}</p>
                <p>{inputData.textAreaText}</p>
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
                    <button type="submit">Submit Note</button>
                </div>
                
            </form>
        </section>
    );
}

export default InputNote;