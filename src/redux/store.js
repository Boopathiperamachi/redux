import {createStore} from 'redux';
import cakeReducer from './buycake/cakeReducer'

// import rootReducer from './rootreducer'
const store =createStore(cakeReducer)
export default store
