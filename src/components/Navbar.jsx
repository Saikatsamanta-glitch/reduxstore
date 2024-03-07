import React from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="h-12 border flex items-center px-5">
      <div className="cursor-pointer" onClick={()=>{navigate('/')}}>Navbar</div>
      <div className="ms-auto flex cursor-pointer" onClick={()=>{navigate('/cart')}}>
        <p>0</p>
        <i className="fi fi-rr-shopping-cart "></i>
      </div>
    </nav>
  );
}
