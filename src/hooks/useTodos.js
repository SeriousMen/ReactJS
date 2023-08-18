import { useSelector,useDispatch } from "react-redux";

const useTodos = () => {

    const todos = useSelector ((state) => state);
   
    const dispatch = useDispatch();

    return {
        state : todos,
        dispatch
    }
}


export default useTodos; 

