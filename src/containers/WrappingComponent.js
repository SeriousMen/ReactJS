// import React from "react";
import { useSelector,useDispatch } from "react-redux";
import WrappedComponent from "../testComponents/WrappedComponent";
import useTodos from "../hooks/useTodos";
const WrappingComponent = () => {
        const {state,dispatch} = useTodos();

//    const state = useSelector((state) => state);
//     const dispatch = useDispatch();
   return (<WrappedComponent
        state = {state}
        dispatch ={dispatch}
        /> );

}

export default WrappingComponent;