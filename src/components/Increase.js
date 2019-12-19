import React  from "react";
import {connect} from 'react-redux'
import {addCake} from '../redux'
function Increase (props) {

    return(
    <div><button onClick={props.addCake}>AddCake</button>
    </div>)
  }
  const mapStateToProps=state=>{
    return{
      numOfCake:state.numOfCake
    }
  }
  const mapDispatchToProps=dispatch=>{
    return{
      addCake:()=>dispatch(addCake())
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps)( Increase)
