import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Register from "./components/Register";
import Contact from "./components/Contact";
import Jobs from "./components/Jobs";
import SingleJob from "./components/SingleJob";
import Services from "./components/Services";

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
      <Routes>
          <Route path="/contact" Component={Contact}/>
      </Routes>
      <Routes>
          <Route path="/jobs" Component={Jobs}/>
      </Routes>
      <Routes>
          <Route path="/jobs/:id" Component={SingleJob}/>
      </Routes>
      <Routes>
          <Route path="/services" Component={Services}/>
      </Routes>
      
    </Router>
    </>
  );
}

export default App;
