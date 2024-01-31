import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

    let 접니다: '대머리' | '솔로';
    접니다 = "대머리";

    function 함수(x: '가위' | '바위' | '보' ): ('가위' | '바위' | '보')[]{
        return ['가위'];
    }

    // literal type은 const 업글 버전과 비슷

    함수('가위');

    var 자료 = {
         name : 'kim'
    } as const


    function 내함수(a: 'kim'){
        return 자료.name
    }

    내함수(자료.name);


    return (
        <div className="App">
            <header className="App-header">
            </header>
        </div>
    );
}

export default App;
