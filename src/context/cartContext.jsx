import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const Provider = (props) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    //Funcion que borra todos los productos del carrito.
    const clear = () => setCart([]);

    //Agrego los Items a mi estado del context y los sumo al carrito.
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            alert('Ya está en el carrito');
        } else {
            setCart([...cart, { ...item, cantidad }]);
            console.log(cart)
        }
    };

    //Eliminar 1 solo producto del carrito
    const removeItem = (item) => {
        const itemRemoved = cart.filter((i) => i.id !== item);
        setCart(itemRemoved);
    };

    const isInCart = (id) => {
        return cart.some((item) => item.id === id);
    };

    return (
        <CartContext.Provider 
            value={{ 
                cart, 
                addItem,
                removeItem,
                clear
            }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default Provider;