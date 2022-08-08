import {useContext} from 'react'
import {CartContext} from '../../context/cartContext'
import {Link} from 'react-router-dom'
import OrderForm from './OrderForm'

const Cart = () => {
    const {removeItem, clear, total, cart} = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <h2>
                aun no hay productos volver al <Link to="/">Home</Link>
            </h2>
        )
    }
    return(
        <div>
            {cart.map((prod) => (
                <div 
                    key={prod.id}
                    style={{
                        border: '1px solid black',
                        margin: '10px',
                        display: 'flex',
                    }}
                >
                <img src={prod.img} alt="producto" className="imgCarrito" width="70px" />
                <div>
                    <h2>{prod.name}</h2>
                    <h4>Precio: $ {prod.price}</h4>
                    <h4>Cantidad: {prod.cantidad}</h4>
                </div>
                <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                <Link to={`/item/${prod.id}`}>
                    <button onClick={() => removeItem(prod.id)}>Modificar la cantidad</button>
                </Link>
                </div>
            )
            )}
        <button onClick={clear}>Eliminar todos los productos</button>
        <h3>Total: $ {total()}</h3>
        <div className='buy-form'>
        <OrderForm cart={cart} total={total()} />
        </div>
    </div>
    )
}
export default Cart;