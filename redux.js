import React, {useReducer} from "react";

function Redux(){
    const intialstate=0

    const reducer=(state,action)=>{
            if(action.type === "incremetn"){
                return state + 1
            }
        if(action.type === "decremnet"){
            return state - 1
        }
        return state
    }
    const[state,dispatch]=useReducer(reducer,intialstate)

    return(
        <div>
            <p>{state}</p>
            <button onClick={()=>{dispatch({type:"incremetn"})}}>increment</button>
            <button onClick={()=>{dispatch({type:"decremnet"})}}>decremnet</button>
        </div>
    )

}
export default Redux;