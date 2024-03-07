import React, { useEffect, useState } from "react";
import { fetch_data } from "../../util";


// useDispatch and useSelector
export default function Home() {
  const [product, setProduct] = useState([]);

  async function getProduct(){
    setProduct( await fetch_data('https://fakestoreapi.com/products'))
  }
  useEffect(() => {
    getProduct();
  }, []);
 
  return (
    <div className="p-16 flex flex-wrap gap-5">
        {
            product.map((items, index)=>{
                return <div key={items.id} className="border h-52 w-52 flex justify-center items-center flex-col">
                    <img src={items.image} className="h-3/4" />
                    <button className="rounded bg-yellow-200 px-2 py-1" onClick={()=>{}} > Add to Card </button>
                </div>
            })
        }
    </div>
  );
}
