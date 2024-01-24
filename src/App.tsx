import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

    function 결혼가능하냐(소득: number, 집보유여부: boolean, 매력점수: string): string {
        let 점수 = 소득;
        if (집보유여부) {
            점수 += 500;
        }

        if (매력점수 == '상') {
            점수 += 100;
        }

        if (점수 >= 600)
            return '결혼가능'

        return 점수.toString();
    }


    return (
        <div className="App">
            <header className="App-header">
                {결혼가능하냐(700, false, '중')}
                {결혼가능하냐(100, false, '상')}
            </header>
        </div>
    );
}

export default App;
