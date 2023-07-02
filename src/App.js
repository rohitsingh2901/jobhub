import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from "./components/Register";

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/login" Component={Login}/>
      </Routes>
      <Routes>
          <Route path="/register" Component={Register}/>
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
