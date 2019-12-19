import {BUY_CAKE,ADD_CAKE} from "./cakeType"
 const initialState={
   numOfCake:20
 }
 const cakeReducer=(state=initialState,action)=>{
   switch(action.type){
     case BUY_CAKE:return {
       ...state,
       numOfCake:state.numOfCake - 1

     }
     case ADD_CAKE:return {
       ...state,
       numOfCake:state.numOfCake + 1

     }

       default: return state;
   }
 }
export default cakeReducer
