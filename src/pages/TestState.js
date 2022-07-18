import {useEffect, useState} from 'react';
import TestState2 from "./TestState2";
const TestState = () => {
let [count, setCount] = useState(1);
let [name,setName] =useState("하이");
// function plusCount(){
//     setCount(count+1);
// }

const plusCount = () => {
    setCount(()=>count+1);
}

const changeName = () =>{
    // setName(() => ({
    //     name :"변경된 이름"
    // }))
    setName("변경된이름")
}
useEffect(()=>{
    console.log("변경됨");

})
return <>
    <div>{count}
        <button onClick={()=>{plusCount()}}>
        숫자 업
        </button>

        <div>
            <button onClick={() => {changeName()}}>부모에서 이름변경</button>
            {name}
            <TestState2 myName ={name}/>
        </div>
    </div>
</>
}

export default TestState;