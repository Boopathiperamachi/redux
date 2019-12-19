import React  from "react";
import {connect} from 'react-redux'
import {buyCake} from '../redux'

function Cakes (props) {
  return(
    <div><h2>
    Number of Cakes={props.numOfCake}</h2>
    </div>)
  }
  const mapStateToProps=state=>{
    return{
      numOfCake:state.numOfCake
    }
  }
  const mapDispatchToProps=dispatch=>{
    return{
      buycake:()=>dispatch(buyCake())
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)( Cakes)
