import Spts from "./components/mainpg";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Posts from "./components/Post";
import Get from "./components/get";
import Put from "./components/put";
import Delete from "./components/delete";
function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Spts/>}   />
      <Route path='/getvalues' element={<Get/>}   />
      <Route path="/post" element={<Posts/>}/>
      <Route path="/put" element={<Put/>}/>
      <Route path='/delete' element={<Delete/>}/>
     </Routes>
    </div>
  );
}

export default App;
