import React,  { useContext } from 'react'
import './CartItems.css'
/* import from 'react'; */
import { ComprarContext } from '../../Context/ComprarContext'
import remove_icon from '../Assets/cart_cross_icon.png'


 const CartItems = () => {
   const { all_product, cartItems, removeFromCart,getTotalCartAmount} = useContext(ComprarContext)
   return (
      <div className='cartitems'>
         <div className="cartitems-format-main">
            <p>Producto </p>
            <p>Título</p>
            <p> Precio</p>
            <p>Cantidad</p>
            <p>Total </p>
            <p>Eliminar</p>
         </div>
         <hr className='arriba'/>

         {all_product.map((e) => {
            if (cartItems[e.id] > 0) {
               return <div>
                  <div className="cartitems-format cartitems-format-main">
                     <img src={e.image} alt="" className="carticon-product-icon" />
                     <p>{e.name}</p>
                     <p>$ {e.new_price}</p>
                     <button className="cartitems-quantity">{cartItems[e.id]}</button>
                     {/* multiplica el precio por el numero de la cantidad de eventos(id)*/}
                     <p> $ {e.new_price *cartItems[e.id]}</p>
                     <img className='icon' src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                  </div>
                  <hr className='arriba' />
               </div>
            }
            return null;
         })}
         <div className="catitems-down">
            <div className="cartitems-total">
               <h1>Total del Carro</h1>
               <div>
                  <div className="cartitems-total-item">
                     <p>Subtotal</p>
                     <p>${getTotalCartAmount()}</p>
                  </div>
                  <hr className='bajo'/>
                  <div className="cartitems-total-item">
                     <p>Costo de envío</p>
                     <p>Envío gratis</p>
                  </div>
                  <hr className='bajo'/>
                  <div className="cartitems-total-item">
                     <h3>Total</h3>
                     <h3>${getTotalCartAmount()}</h3>
                  </div>
               </div>
              <button>Concretar el pago</button>
            </div>
            <div className="cartitems-promocode">
               <p>Si tiene un código de promoción,por favor,ingréselo aquí</p>
               <div className="cartitems-promobox">
                  <input type="text" placeholder='Código de promoción'/>
                  <button>Enviar</button>
               </div>
            </div>
         </div>
      </div>
   )
}
export default CartItems;