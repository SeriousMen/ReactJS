import React from "react";
import { useSelector,useDispatch } from "react-redux";

const WrappedComponent =() => {

    const state = useSelector((state) => state);
    const dispatch = useDispatch(); 


        return(
        
        <>
        <div style={{border : '1px solid black'}}>
                안녕하세요
                {state}
        </div>
        <button onClick={() => {dispatch({type:'증가'})}}>증가</button>
        </>
        
        );
    
}

export default WrappedComponent;
