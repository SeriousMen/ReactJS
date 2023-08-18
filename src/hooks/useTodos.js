import { useSelector,useDispatch } from "react-redux";

const useTodos = () => {

    const todos = useSelector ((state) => state);
    console.log('todos',todos);
    const dispatch = useDispatch();

    return {
        state : todos,
        dispatch
    }
}


export default useTodos; 

