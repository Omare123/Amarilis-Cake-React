import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import ItemList from "../itemListComponent/itemList";
import "./itemListContainer.scss"

export default function ItemListContainer({ setItemDetail }) {
  const [alfajores, setAlfajores] = useState([]);
  const [tortas, setTortas] = useState([]);
  const [cajas, setCajas] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = collection(db, 'items')
      const response = await getDocs(query)
      const data = response.docs.map(doc => { return { id: doc.id, ...doc.data() } })
      setAlfajores(data.filter(producto => producto.type == "Alfajor"))
      setTortas(data.filter(producto => producto.type == "Torta"))
      setCajas(data.filter(producto => producto.type == "Caja"))
    }
    getData()
  }, [])

  return (<div className="itemList">
    {alfajores.length ? <ItemList items={alfajores} /> : "Loading..."}
    {tortas.length ? <ItemList items={tortas} /> : "Loading..."}
    {cajas.length ? <ItemList items={cajas} /> : "Loading..."}
  </div>)

}