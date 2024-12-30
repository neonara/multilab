import { Route,Routes } from "react-router-dom";
import LoginComponent from './pages/Login';
function App() {
  return (
    <div className="App">
     <Routes>
     <Route path='/test' element={<LoginComponent/>}/>
     </Routes>
    </div>
  );
}

export default App;
