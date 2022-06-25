
import Header from './components/Header';
import Cart from './components/Cart';
import {useState} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addtocart from './components/Addtocart';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
//import Content from './components/Content';

function App() {
  let[filterState , setfilterState]=useState('normal');
  const[cart,setcart]=useState([]);
  function Adds(product){
    const productCart=cart.find((ele)=>ele.id===product.id);

    if(productCart){
      setcart(cart.map((ele)=>ele.id==product.id ?{...productCart, quantity:productCart.quantity+1}:ele))
    }else{
      setcart([...cart,{...product, quantity:1}])
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header setfilterState={{setfilterState,cart}}/>
      
      <Routes>
          <Route path="/" element={<Cart filterState={{filterState,Adds}}/>} />
          <Route path="/addtocart" element={<Addtocart cart={{cart,Adds}}/>} />

      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
