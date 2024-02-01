import React from 'react';
import './App.css';


function App() {

    type 함수타입 = (a: string) => number;
    type NumOut = (x: number, y: number) => number;

    let ABC: NumOut = function (x, y) {
        return x + y;
    }

    type Member = {
        name: string,
        age: number,
        plusOne: (x: number) => number,
        changeName: () => void
    };


    let 함수: 함수타입 = function (a) {
        return 10;
    }

    let 회원정보: Member = {
        name: 'kim',
        age: 30,
        plusOne(x) {
            return x + 1
        },
        changeName: () => {
            console.log('안녕');
        }
    }

    회원정보.plusOne(1);
    // 회원정보.changeName();

    type cut = (x: string) => string;
    type remove = (x : string) => string;

    function cutZero(x: string) {
        if (x.charAt(0) == '0') {
            return x.substring(1, x.length)
        }
        return x
    }


    function removeDash(x: string) {
        let returnStr = "";
        for (let i = 0; i < x.length; i++) {
            if (x.charAt(i) != '-') {

                returnStr += x.at(i);
            }
        }
        return returnStr;
    }


    function 만들함수(x:string, y:cut, z: remove ):string{
        return z(y(x));
    }

    console.log(만들함수('010-1111-2222', cutZero, removeDash));

    //
    // function 함수1(a) {
    //     a()
    // }
    //
    // function 함수2() {
    //
    // }
    //
    // 함수1(함수2)

    return (
        <div className="App">
            <header className="App-header">
            </header>
        </div>
    );
}

export default App;
