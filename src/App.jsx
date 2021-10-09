import React from 'react';
import Header from './components/Header';
import InputNote from './components/InputNote';
import Note from './components/Note';
import Footer from './components/Footer';
import notes from './notes';

const App = () => {
    return(
        <div>
            <Header />
            <InputNote 
                
            />
            {notes.map((note, index) => 
                    <Note 
                        key={index}
                        {...notes[index]}
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