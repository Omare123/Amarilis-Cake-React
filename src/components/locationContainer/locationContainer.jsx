import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import LocationComponent from '../locationComponent/locationComponent'
import "./locationContainer.scss"

export default function LocationContainer() {
  
  const [routes, setRoutes] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const query = collection(db, 'routes')
      const response = await getDocs(query)
      const data = response.docs.map(doc => { return { id: doc.id, ...doc.data() } })
      setRoutes(data)
    }
    getData()
  }, [])

  return (<div class="direction__row">{routes.map(route => <LocationComponent item={route}/>)}</div>)

}