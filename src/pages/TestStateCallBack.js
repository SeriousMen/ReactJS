import { useState,useEffect } from "react";

const TestStateCallBack = () => {

    // 1. setState는 기본적으로 비동기적
    // 2. setState를 연속으로 호출 헀을때 리액트 내부적으로 배치처리를 한다.
    // 3. setState에 state 객체를 넘겨줄 수 있을 뿐만 아니라, 새로운 state를 반환하는 함수도 인자로 넘겨줄 수 있다. 

    // 리액트에서 state가 랜더링 되는 원리는 원래의 state의 element tree 변경된 state의 element tree를 비교한 다음 최종적으로 변경된 부분이 있으면
    // 그걸 DOM에 적용하는 과정을 거친다. 
    // 하지만 연속적으로 setState를 호출할 경우 리액트는 하나하나 비교하지 않고 merging을 하고 한번에 비교를 한다. 
    // 리액트 state는 객체 이다 
    const [number, setNumber ] = useState(1);

    const add =() => {setNumber(number +1)}
    const subtract = () => {setNumber(number - 1)}
    const multyplyBy2 = () => {setNumber(number * 2)} 
    const multyplyBy2AndAddBy1 = () =>{
        // 아래처럼 setState를 여러개 호출할때
        multyplyBy2();
        add();
    }
    return (

        <>
        <div>
            <button onClick={add()}>add()</button>
            <button onClick={subtract()}>subtract()</button>
            <button onClick={multyplyBy2()}>multyplyBy2()</button>
            <button onClick={multyplyBy2AndAddBy1()}>multyplyBy2AndAddBy1()</button>
        </div>
        <div>
            {number}
        </div>
        </>
    )

    
}

export default TestStateCallBack;