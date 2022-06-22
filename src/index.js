import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestClassComp from './testComponents/TestClassComp';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Main from './pages/Main';

//<App/> 이런식으로 하는게 JSX를 이용해 컴포넌트를 사용하는 것
const root = ReactDOM.createRoot(document.getElementById('root'));
//ctl+alt+L 자동정렬
root.render(
    <BrowserRouter>
        <React.StrictMode>
            
            {/* <App/> */}
            {/* <TestClassComp/> */}
            <Main/>
        </React.StrictMode>
    </BrowserRouter>
);

//src 폴더에 포함되어 있다. 메인이다. 이곳에서 HTML 템플릿 과 javascript 컴포넌트를 조합해서 렌더링하고 표시한다.
//index.html의 id='root'인 요소를 가져와서 그 안에 APP.js를 뿌려서 렌더링한다.
//리액트는 직접 HTML을 코딩하는 게 아니라 js(jsx)에서 뷰를 만들어, .html의 div에 동적으로 뿌려준다.
// .html은 이러한 동적인 뷰를 위한 껍데기이다.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
