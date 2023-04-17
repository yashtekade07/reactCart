import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./components/HOme";
import Header from "./components/Header";
import {Toaster} from "react-hot-toast"
import CArt from "./components/CArt";
import "./styles/app.scss"

function App() {
  return (
 <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<CArt/>}/>
     
    </Routes>
    <Toaster/>
 </Router>
  );
}

export default App;
