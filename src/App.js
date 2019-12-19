import React from 'react';
import Cakes from "./components/Cake"
import Increase from "./components/Increase";
import Decrease from "./components/Decrease";
import{ Provider} from "react-redux";
import store from './redux/store';
function App() {
  return (  <Provider store={store}>
    <div className="App">
  <Cakes/>
    <p><Increase/>
</p><p>
<Decrease/></p>

    </div></Provider>
  );
}

export default App;
