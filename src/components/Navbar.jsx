import React from "react";
import { useSelector } from "react-redux";
export default function Navbar() {
    const product = useSelector(store => store);
    console.log(product)
  return (
    <nav className="h-12 border flex items-center px-5">
      <div>Navbar</div>
      <div className="ms-auto flex">
        <p>1</p>
        <i className="fi fi-rr-shopping-cart "></i>
      </div>
    </nav>
  );
}
