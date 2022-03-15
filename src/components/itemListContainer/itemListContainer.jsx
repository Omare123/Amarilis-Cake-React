import React, { useState, useEffect } from "react";
import ItemList from "../itemListComponent/itemList";
import "./itemListContainer.scss"

export default function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const mockProducts = [
    {
      id: "1",
      name: "Torta",
      price: 123,
      description: "Esta es la descripción de un producto",
      url: "https://cdn.shopify.com/s/files/1/0366/4442/1770/products/Miprefe-entera_370x.jpg?v=1619536824"
    },
    {
      id: "2",
      name: "Torta",
      price: 123,
      description: "Esta es la descripción de un producto",
      url: "https://annaspasteleria.com/images/_imageBlock/DSC_3586web.jpg"
    },
    {
      id: "3",
      name: "Torta",
      price: 123,
      description: "Esta es la descripción de un producto",
      url: "https://http2.mlstatic.com/D_NQ_NP_885041-MLA46514264263_062021-V.webp"
    },
    {
      id: "4",
      name: "Torta",
      price: 123,
      description: "Esta es la descripción de un producto",
      url: "https://http2.mlstatic.com/D_NQ_NP_799009-MLA46033443941_052021-V.webp"
    },
  ]

  const promesa = new Promise((res, rej) => {
    setTimeout(()=>{
      res(setProducts(mockProducts))
    }, 3000)
  })

  return (<div className="itemList">
    {products.length ? <ItemList items={products} /> : "Loading..."}
  </div>)

}