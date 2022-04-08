import React, { useContext } from "react";
import CartListComponent from "../cartListComponent/cartListComponent";
import CartSidebarContainer from "../cartSidebarContainer/cartSidebarContainer";
import "./cartListContainer.scss"
import { ProductsContext } from '../cartContext/ProductsContext'
import { addDoc, collection, doc, getDoc, Timestamp, updateDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase'
import { useNavigate } from 'react-router-dom';

export default function CartListContainer() {
  const { cart, price, onMinus, onPlus, clearCart } = useContext(ProductsContext)
  const navigate = useNavigate();
  let orderId = ''
  const buy = async (name, phone, mail, direction) => {
    const order = {
      buyer: {
        name: name,
        phone: phone,
        email: mail,
        direction: direction
      },
      items: [...cart],
      date: Timestamp.fromDate(new Date()),
      total: price
    }
    const orderCollection = collection(db, 'orders')
    addDoc(orderCollection, order).then(reference => {
      orderId = reference.id
      cart.forEach(product => {
        console.log(product)
        sendOrder(product)
      })
    }).finally(o => {
      clearCart()
      navigate(`/order/${orderId}`);
    })
  }
  const sendOrder = async (product) => {
    const docReference = doc(db, 'items', product.id)
    const docResponse = await getDoc(docReference)
    const docData = docResponse.data()
    updateDoc(docReference, { ...docData, stock: product.stock - product.quantity })
  }
  return (<div className="cartView">
    {cart.length > 0 ? (
      <div className="cartItemList">
        <CartListComponent items={cart} onMinus={onMinus} onPlus={onPlus} />
        <CartSidebarContainer price={price} buy={buy} />
      </div>
    ) : <div>No hay productos</div>}
  </div>)

}