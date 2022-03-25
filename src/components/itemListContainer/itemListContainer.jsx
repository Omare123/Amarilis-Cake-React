import React, { useState } from "react";
import ItemList from "../itemListComponent/itemList";
import "./itemListContainer.scss"

export default function ItemListContainer({setItemDetail}) {
  const [products, setProducts] = useState([]);
  const mockProducts = [
    {
      id: "1",
      name: "Torta",
      price: 123,
      stock: 9,
      description: "Esta es la descripción de un producto",
      url: "https://cdn.shopify.com/s/files/1/0366/4442/1770/products/Miprefe-entera_370x.jpg?v=1619536824"
    },
    {
      id: "2",
      name: "Torta",
      price: 123,
      stock: 10,
      description: "Esta es la descripción de un producto",
      url: "https://annaspasteleria.com/images/_imageBlock/DSC_3586web.jpg"
    },
    {
      id: "3",
      name: "Torta",
      price: 123,
      stock: 6,
      description: "Esta es la descripción de un producto",
      url: "https://http2.mlstatic.com/D_NQ_NP_885041-MLA46514264263_062021-V.webp"
    },
    {
      id: "4",
      name: "Torta",
      price: 123,
      stock: 2,
      description: "Esta es la descripción de un producto",
      url: "https://http2.mlstatic.com/D_NQ_NP_799009-MLA46033443941_052021-V.webp"
    },
    {
      id: "5",
      name: "Torta",
      price: 123,
      stock: 2,
      description: "Esta es la descripción de un producto",
      url: "https://http2.mlstatic.com/D_NQ_NP_799009-MLA46033443941_052021-V.webp"
    },
    {
      id: "6",
      name: "Torta",
      price: 123,
      stock: 2,
      description: "Esta es la descripción de un producto",
      url: "https://http2.mlstatic.com/D_NQ_NP_799009-MLA46033443941_052021-V.webp"
    },
  ]

  const promesa = new Promise((res) => {
    setTimeout(()=>{
      res(setProducts(mockProducts))
    }, 1000)
  })

  return (<div className="itemList">
    {products.length ? <ItemList items={products} setItemDetail={setItemDetail} /> : "Loading..."}
  </div>)

}