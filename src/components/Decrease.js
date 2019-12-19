import React  from "react";
import {connect} from 'react-redux'
import {buyCake} from '../redux'
// import{ Provider} from "react-redux";
// import store from '../redux/store';

function Decrease (props) {

    return(
    <div>
    <button onClick={props.buyCake}>
    BuyCake </button>
    </div>)
  }
const mapStateToProps=state=>{
  return{
    numOfCake:state.numOfCake
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    buyCake:()=>dispatch(buyCake())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)( Decrease)
