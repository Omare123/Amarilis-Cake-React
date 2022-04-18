import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { FaInstagram } from "react-icons/fa";

export default function LocationComponent({item}) {
  let maps = "https://www.google.com/maps/embed/v1/place?key=AIzaSyChBHpBjPzwy0wzEG3QJV3V-XkNh952FyI&q="
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

  return (
    <div class="direction__row__card">
      <div class="direction__row__card__information">
        <span>{item.name}</span>
        <a class="direction__row__card__information__instagram" target="_blank" href={`https://www.instagram.com/${item.instagram}/`}>
           <FaInstagram/>
          <span>{item.instagram}</span></a>
      </div>
      <iframe class="direction__row__card__iframe"
        src={maps + item.route}
        allowfullscreen>
      </iframe>
    </div>
)

}