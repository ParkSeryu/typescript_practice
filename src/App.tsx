import React from 'react';
import './App.css';


function App() {
    let 제목 = document.querySelector('#title');
    if (제목?.innerHTML != undefined) {
        제목.innerHTML = '반가워요'
    }

    let 링크 = document.querySelector('.link');
    if (링크 instanceof HTMLAnchorElement)
        링크.href = 'https://kakao.com'

    let 버튼 = document.querySelector('#button');
    let 이미지 = document.querySelector('#image');
    버튼?.addEventListener('click', function () {
        if (이미지 instanceof HTMLImageElement)
            이미지.src = 'new.jpg'
    })

    let 링크2 = document.querySelectorAll('.naver');
    링크2.forEach((each) => {
        if(each instanceof HTMLAnchorElement){
            each.href='https://kakao.com'
        }
    })

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
