import React, { useState } from 'react';
import Header from './components/Header';
import InputNote from './components/InputNote';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes';

const App = () => {

    const [ submittedInput, setSubmittedInput ] = useState([]);

    const handleClick = (inputData) => {

        setSubmittedInput([
            ...submittedInput,
            inputData
        ]);
    }


    return(
        <div>
            <Header />
            <InputNote 
                handleClick={handleClick}
            />
            {/* {notes.map((note, index) => 
                    <Note 
                        key={index}
                        {...notes[index]}
                    />
            )} */}

            {submittedInput.map((eachNote, index) => 
                    <Note 
                        key={index}
                        id={index}
                        {...submittedInput[index]}
                    />
            )}

            {/* 
            <Note {...notes[0]} />
            <Note {...notes[1]} />
            <Note {...notes[2]} />
            <Note {...notes[3]} /> */}

            {/* <Note 
                title={notes.title}
                content={notes.content}
            /> */}

            <Footer />
        </div>
    );
}

export default App;