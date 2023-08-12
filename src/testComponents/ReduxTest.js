import { useDispatch, useSelector } from "react-redux";

const ReduxTest = () =>{
    const 꺼내온거 = useSelector((state) => state);
    const dispatch = useDispatch();
    return (
        <>  
        <p>님의 몸무게 : {꺼내온거}</p>

        <button onClick={() => {dispatch({type : '증가'} )}}>증가</button>
        <button onClick={() => {dispatch({type : '감소'} )}}>감소</button>
        </>
    );
}

export default ReduxTest;