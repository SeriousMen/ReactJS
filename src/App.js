import logo from './logo.svg';
import './App.css';
import  {BrowserView, MobileView} from 'react-device-detect';
import {Route, Routes} from "react-router";
import Login from './pages/login.js';
import {BrowserRouter} from "react-router-dom";
//src 폴더에 있다. 컴포넌트를 정의하는 프로그램, 실제로 화면에 표시되는 내용들이다.
// className이런거 jsx문법


function App({history}) {

  return (
    <div className="App">
      <BrowserView>
        데스크톱 브라우저 !

              <button onClick={history.push("/Login")}>로그인하기</button>


          <Routes>
           <Route path="/Login" element={<Login/>}/>
          </Routes>

      </BrowserView>
      <MobileView>
        모바일 브라우저 !
      </MobileView>
     {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}

    </div>
  );
}

//export 는 다른 파일에서 해당 함수나, 변수를 사용할 수 있도록 내보낼 때 사용한다.
//export default 는 하나의 변수/함수만 내보낼 수 있고
//export 는 2개 이상의 변수/함수를 내보낼 수 있다.
//export는 맨 마지막 줄에 위치하고, 한 파일에서 단 한번만 사용할 수 있다.

export default App;
