import React, { useContext } from 'react';
import DataContext from '../context/dataContext';
import './Startcss.css';
const Start = () => {
    const {startQuiz, showStart} = useContext(DataContext);
    return (
        <section style={{ display: `${showStart ? 'block' : 'none'}` }} className='sec'>
        <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
            <div className='head'>
                <h1 >Basic React JS Quiz</h1>
                <button onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold" >Start Quiz</button>
            </div>
        </div>
    </div>
        </section>
    );
};

export default Start;