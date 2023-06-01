import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.css'
import { useStatevalue } from './StateProvider';
import { getBasketTotal } from './reducer';
export default function Subtotal() {
  const [{ basket }, dispatch] = useStatevalue();
  return <div className="subtotal">
    <CurrencyFormat
    renderText={(value)=>(
        <>
        <p>
            subtotal({basket?.length}items) : <strong>{value}</strong>
        </p>
        <small className='subtotle_gift'>
            <input type='checkbox'/> this order contain a gift

        </small>
        </>
    )}
    decimalScale={2}
    value={getBasketTotal(basket)}
    displayType={"text"}
    thousandSeparator={true}
    prefix={'$'}
    />
    <button> Proceed to Checkout</button>
  </div>;
}
