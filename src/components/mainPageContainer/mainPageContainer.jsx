import React, { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import LocationComponent from '../locationComponent/locationComponent'
import "./mainPageContainer.scss"

export default function MainPageContainer() {
  
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

  return (<div class="direction__row">
    <div class="banner">
			<div class="banner__icon" id="iconOne"></div>
			<div class="banner__icon" id="iconTwo"></div>
			<div class="banner__icon" id="iconThree"></div>
			<div class="banner__icon" id="iconFour"></div>
		</div>
		<div class="intro">
			<div class="intro__section">
				<span class="iconify intro__section__icon" data-icon="mdi:cards-heart"></span>
				<span class="iconify intro__section__text">La combinación de sabores, texturas, aromas, las diferentes técnicas y procesos para realizar nuestros productos son de nuestra curiosidad. Queremos que, al probarlos, experimentes todos esos detalles de
					búsqueda que hay en la elaboración de cada uno de nuestros productos. <br/> <br/> Donde lo clásico se transforma y lo no tan clásico se destaca.</span>
			</div>
		</div>

		<div class="vegan">
			<div class="vegan__title">
				<span>Productos Veganos</span>
			</div>

			<div class="vegan__supercard">
					<div class="vegan__supercard__img"></div>
					<div class="vegan__supercard__information">
						<span class="iconify" data-width="60" data-icon="jam:flower"></span>
						<span class="vegan__supercard__information__title">Torta de chocolate amargo</span>
						<span class="vegan__supercard__information__desciption"> 3 pisos bizcocho húmedo de chocolate 2 de relleno , uno de ganache de chocolate semi amargo y leche de coco. Y otro de mantequilla de maní con crocante de maní. Cubierto con la ganache de chocolate, decorada con frutillas, arándanos, flores comestibles y nibs de cacao.</span>
					</div>
			</div>
			<div class="vegan__divition">
				<div class="vegan__divition__card">
					<img class="vegan__divition__card__img" id="veganOne"/>
					<div class="vegan__divition__card__information">
						<p>Mini budines horneados de banana.</p>
					</div>
				</div>
				<div class="vegan__divition__card">
					<img class="vegan__divition__card__img" id="veganTwo"/>
					<div class="vegan__divition__card__information">
						<p>Bombones de dátiles bañados en chocolate amargo y rellenos de mantequilla de maní.</p>
					</div>
				</div>
				<div class="vegan__divition__card">
					<img class="vegan__divition__card__img" id="veganThree"/>
					<div class="vegan__divition__card__information">
						<p>Alfajores de cacao, ganache de chocolate semi amargo y centro de frambuesa.</p>
					</div>
				</div>
			</div>
		</div>
  </div>)

}