import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import TestClassComp from './testComponents/TestClassComp';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import Main from './pages/Main';
import TestState from './pages/TestState';
import ReduxTest from './testComponents/ReduxTest';
import WrappedComponent from './testComponents/WrappedComponent';
import WrappingComponent from './containers/WrappingComponent';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';
import Store from './configurationStore/Store';
//<App/> 이런식으로 하는게 JSX를 이용해 컴포넌트를 사용하는 것
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const weight = 100;
const storeState = {
    weight : 100,
    boardTitle : ''
};


//reducer는 store안에 있는 값을 어떻게 바꿀 것인지에 대한 함수 
// action을 통해 state 수정방법 정의 
function reducer(state = storeState , action){
    switch(action.type){
        case  '증가':
            state = {...state, weight : ++state.weight };   
        break;

        case '감소' :
            state = {...state, weight : --state.weight};
        break; 

        case '중고게시판' :
            state = {...state, boardTitle : '중고'};
        break;

        case '경매게시판' :
            state = {...state, boardTitle : '경매'};
        break;
    }
    // if (action.type === '증가'){  
       
    //     state = {...state, weight : ++state.weight };  
      
    //     return state;
    // } else if(action.type === '감소'){
        
    //     state = {...state, weight : --state.weight};
    
    //     // state --;
    //     return state  ;         
    // } else if(action.type === '중고게시판'){

    //     state = {...state, boardTitle : '중고'}
    //     return state ;
    // } else if(action.type === '경매게시판'){

    //     state = {...state, boardTitle : '경매'}
    //     return state;
    // }
    return state
};

let store = Store(reducer);

const root = document.getElementById('root');
//ctl+alt+L 자동정렬
//react v 18 부터는 ReactDOM.render를 지원하지 않고 createRoot()를 쓰는 것을 권장함 
// ReactDOM.render(
//         <React.StrictMode>
//         <Provider store={store}>    
//             {/* <App/> */}
//             {/* <TestClassComp/> */}
//             {/* <Main/> */}
//             {/* <TestState/> */}
//             <ReduxTest/>
//         </Provider>
//         </React.StrictMode>
//     ,root
// );

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Provider store={store}>
        {/* <ReduxTest/> */}
        {/* <TestClassComp/> */}
        {/* <TestState/>  */}
        {/* <WrappedComponent/> */}
        <WrappingComponent/>
        </Provider>
    </React.StrictMode>
);

//src 폴더에 포함되어 있다. 메인이다. 이곳에서 HTML 템플릿 과 javascript 컴포넌트를 조합해서 렌더링하고 표시한다.
//index.html의 id='root'인 요소를 가져와서 그 안에 APP.js를 뿌려서 렌더링한다.
//리액트는 직접 HTML을 코딩하는 게 아니라 js(jsx)에서 뷰를 만들어, .html의 div에 동적으로 뿌려준다.
// .html은 이러한 동적인 뷰를 위한 껍데기이다.
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
