import React from "react";


export default function Cart() {

  return (
    <div className="px-16">
      <h1 className="text-2xl">Cart (0)</h1>
      <p>Add up your favorite items here</p>
      <table className="table-auto  text-end p-4 mt-10">
        <thead >
          <tr>
            <th className="w-64">Product</th>
            <th  className="w-64">Product Image</th>
            <th  className="w-64">Price</th>
            <th  className="w-64">Remove</th>
          </tr>
        </thead>
        <tbody>
        {
          // cart_products.map((items, index)=>{
          //   return <tr key={items.id}>
          //     <td className="w-64">{items.title}</td>
          //     <td className="w-64 justify-end flex"><img src={items.image} className="h-20 w-20" /></td>
          //     <td className="w-64">$ {items.price}</td>
          //     <td className="w-64"><button className="bg-red-500 rounded-md px-2 py-1" onClick={()=>{ dispatch(removeProduct(index)) }}>Remove</button></td>
          //   </tr>
          // })
        }
        </tbody>
      </table>
    </div>
  );
}
