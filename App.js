import logo from './logo.svg';
// import './App.css';
import './Css/Master.css';
import Header from './Header';
import Home from './Home';
import Service from './Service';

import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>

    <Routes>
     <Route path="/" element = {<Home />} />
      <Route path="/Header" element = {<Header />} />
      <Route path="/Service" element = {<Service />} />
   
   </Routes>
</>
  );
}

export default App;
