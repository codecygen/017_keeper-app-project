import React from 'react';

const InputNote = () => {
    return(
        <section id="note-input">
            <form /*onSubmit={}*/>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Title" 
                    /*onChange={}*/ 
                    /*value={}*/ 
                />

                <textarea 
                    type="text" 
                    name="title" 
                    placeholder="Take a note..." 
                    /*onChange={}*/ 
                    /*value={}*/
                />

                <button type="submit">Submit Note</button>
            </form>
            {/* <h1>Hi</h1>
            <p>How are you?</p> */}
        </section>
    );
}

export default InputNote;