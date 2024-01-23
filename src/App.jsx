import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Fitness from "./routes/Fitness";
import Wellness from "./routes/Wellness";
import About from "./routes/About";
import Working from "./routes/Working";
import Contact from "./routes/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./routes/Signup";
import Login from "./routes/Login";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/working" element={<Working/>}/>  
        <Route path="/contact" element={<Contact/>}/> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  );
}