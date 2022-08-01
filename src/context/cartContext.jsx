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
            sumarCantidad(cantidad, item);
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

    //Funcion para mostrar las unidades al lado del carrito
    const unidades = () => {
    const numeros = cart.reduce((x, y) => x + y.cantidad, 0);
    return numeros;
    };

    //Funcion para sumar el total
    const total = () => {
    const sumaTotal = cart.reduce((x, y) => x + y.price * y.cantidad, 0);
    return sumaTotal;
    };

    //funcion para sumar la cantida de items del mismo producto
    const sumarCantidad = (counter, item) => {
    const cantidad = [...cart];
    cantidad.forEach((c) => {
    c.id === item.id && (c.cantidad += counter);
    });

    setCart(cantidad);
    };

    return (
        <CartContext.Provider 
            value={{ 
                cart, 
                addItem,
                removeItem,
                clear,
                unidades,
                total
            }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default Provider;