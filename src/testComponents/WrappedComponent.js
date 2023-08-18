import React from "react";
import useTodos from '../hooks/useTodos';
// import { useSelector,useDispatch } from "react-redux";

// const WrappedComponent =({state, dispatch}) => {
const WrappedComponent =() =>{
//     const state = useSelector((state) => state);
//     const dispatch = useDispatch(); 
                const {state, dispatch} = useTodos();

        return(
        
        <>

        <div style={{border : '1px solid black'}}>
                {state.boardTitle} 게시판입니다. 안녕하세요

                 당신의 몸무게는 {state.weight} 입니다.
               
        </div>
        <button onClick={() => {dispatch({type:'증가'})}}>증량</button>
        <button onClick={() => {dispatch({type:'감소'})}}>감량</button>
        <button onClick={() => {dispatch({type:'중고게시판'})}}>중고게시판</button>
        <button onClick={() => {dispatch({type:'경매게시판'})}}>경매게시판</button>
        </>
        
        );
    
}

export default WrappedComponent;
