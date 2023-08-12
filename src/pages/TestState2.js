import {useState,useEffect} from 'react';

const TestState2 = (props) => {
let[myName, setMyName] = useState(props.myName);

const changMyname = ()=>{
    setMyName("하이2");
}

// useEffect(()=>{
//     console.log("여기도 변경");
//     setMyName(props.myName);
// },[props])
return <>
    <div>
      
        <div>
            <button onClick={()=>{changMyname()}}>이름변경</button>
            {myName}
        </div>
    </div>
</>
}

export default TestState2;