import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
import Register from "./components/Register";
import Contact from "./components/Contact";
import Jobs from "./components/Jobs";
import SingleJob from "./components/SingleJob";
import Services from "./components/Services";
import Alert from "./components/Alert";
import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";


function App() {

  const [msg, setMsg] = useState(null)
  const [typ, setTyp] = useState(null)
  const alert = (msg,typ)=>{
    setMsg(msg)
    setTyp(typ)
    setTimeout(() => {
      setMsg(null)
      setTyp(null)
    }, 3000);
  }


  return (
    <>
    <Router>
      <Navbar/>
      <Alert alert={{msg,typ,alert}}/>
      <Routes>
          <Route  exact path="/jobhub/login" element={<Login alert={{msg,typ,alert}}/>}/>
      </Routes>
      <Routes>
          <Route  exact path="/jobhub/register" element={<Register alert={{msg,typ,alert}}/>}/>
      </Routes>
      <Routes>
          <Route  exact path="/jobhub/contact" element={<Contact alert={{msg,typ,alert}}/>}/>
      </Routes>
      <Routes>
          <Route  exact path="/jobhub/jobs" element={<Jobs alert={{msg,typ,alert}} />}/>
      </Routes>
      <Routes>
          <Route  exact path="/jobhub/jobs/:id" element={<SingleJob alert={{msg,typ,alert}} />}/>
      </Routes>
      <Routes>
          <Route exact  path="/jobhub/services" Component={Services}/>
      </Routes>
      <Routes>
          <Route exact  path="/jobhub/about" Component={About}/>
      </Routes>
      <Routes>
          <Route exact  path="/jobhub/" Component={Home}/>
      </Routes>



      <Footer/>
    </Router>
    </>
  );
}

export default App;
