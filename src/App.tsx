import React from 'react';
import './App.css';


function App() {

    // class 만드는 법이랑 유사함
    interface Square {
        color: string,
        width: number
    }

    let 네모 = {
        color: 'red', width: 100
    };

    interface 학상 {
        name: string,
    }

    interface 선상 extends 학상 {
        age: number
    }

    interface Product {
        brand: string,
        serialNumber: number,
        model: string[]
    }

    let 상품: Product = {
        brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone']
    };

    interface shop {
        product: string,
        price: number
    }

    let 장바구니: shop[] = [{product: '청소기', price: 7000},
        {product: '삼다수', price: 800}
    ];

    interface per extends shop {
        card: boolean
    }

    interface A {
        plus(a : number, b: number): number

        minus(a : number, b: number): number
    }

    let abc:A = {
        plus: (a: number, b: number) => {
            return a + b
        }
        minus: (a: number, b: number) => {
            return a - b;
        }
    }

    console.log(장바구니)


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
