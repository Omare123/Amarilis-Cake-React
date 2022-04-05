import React, { useState, useEffect } from "react";
import ItemDetail from "../itemDetailComponent/itemDetail";
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import "./itemDetailsContainer.scss"
import { useParams } from "react-router-dom";

export default function ItemDetailsContainer() {
  let { id } = useParams();
  const [item, setItem] = useState()
  useEffect(() => {
    const getData = async() => {
      const query  = doc(db, 'items', id)
      const response = await getDoc(query)
      const data = response.data()
      setItem({id: response.id, ...data})
    }
    getData()
  }, [])
  return (<div className="detailsContainer">
    {item && <ItemDetail item={item}/>}
  </div>)

}