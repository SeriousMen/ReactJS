import {useState} from 'react';

const TestState = () => {
let [count, setCount] = useState(1);

// function plusCount(){
//     setCount(count+1);
// }
return <>
    <div>{count}
        <button onClick={()=>{setCount(count+1)}}>
        숫자 업
        </button>
    </div>
</>
}

export default TestState;