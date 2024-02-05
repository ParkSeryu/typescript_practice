import React from 'react';
import './App.css';


function App() {

    class Person {
        name;
        age;

        constructor(a: string) {
            this.name = a;
            this.age = 20;
        }
    }

    let john = new Person('12');
    let kim = new Person('34');

    class Car {
        model: string;
        price: number;

        constructor(model: string, price: number) {
            this.model = model;
            this.price = price;
        }


        tax = () => {
            return this.price / 10
        }
    }

    let car1 = new Car('소나타', 3000);
    console.log(car1);
    console.log(car1.tax());

    class Word {

        num: number[] = [];
        str: string[] = [];

        constructor(...params: (string | number)[]) {
            params.forEach(each => {
                if(typeof each === 'number'){
                    this.num.push(each);
                }else{
                    this.str.push(each);
                }
            })
        }


    }

    let obj = new Word('kim', 3, 5, 'park');
    console.log(obj.num);
    console.log(obj.str);


    return (
        <div className="App">
            <h4 id="title">안녕하세요</h4>
            <a href="naver.com" className="link">링크</a>
            <button id="button">버튼</button>
            <img id="image" src="test.jpg"></img>

            <a className="naver" href="naver.com">링크</a>
            <a className="naver" href="naver.com">링크</a>
            <a className="naver" href="naver.com">링크</a>
        </div>
    );
}

export default App;
