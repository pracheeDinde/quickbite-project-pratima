import "./App.css";
import Navbar from "./component/Navbar";

import { Routes, Route, Outlet } from "react-router-dom";
import Payment from "./component/Payment";
import Body from "./component/Body";
import EmptyCart from "./component/EmptyCart";

function App() {

  return (
    <div className="app">
      <Navbar />
      <Outlet/>
      
      <Routes>
        <Route path="/" element={<Body/>}></Route>
        <Route path="/payment" element={<Payment/>}/>
        <Route path="/empty" element={<EmptyCart/>}/>

      </Routes>
      
    </div>
   
  );
}

export default App;
