import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

    type homework2 = {
        color?: string,
        size: number,
        readonly position: number[]
    }

    let test: homework2 = {
        size: 123,
        position: [1,2,3]
    }

    type homework3 = {
        name: string,
        phone: number
        email: string
    }

    type homework4 = {
        name: string,
        phone: number,
        email: string,
        baby: boolean
    }




    return (
        <div className="App">
            <header className="App-header">
            </header>
        </div>
    );
}

export default App;
