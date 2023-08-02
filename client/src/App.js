import Add from "./add";
import Print from "./print";
import {Routes , Route} from "react-router-dom"
function App() {
  return (
      

    <>
    <Routes>
      <Route path="/" element={<Print/>}/>
      <Route path="/add" element={ <Add/>}/>
      <Route path="/add/:id" element={ <Add/>}/>

      {/* <Route path="/print" element={<Print>}/> */}
    </Routes>
  
    
    </>
  );
}

export default App;
