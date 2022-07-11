import { useState } from "react";


const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState (initial)

    const restar = () => {
        (count > initial) && setCount(count -1);
        }
    

    const sumar = () => {
        (count < stock) && setCount(count +1);
        }
    

    return (
        <div className="counter">
            <div className="counter-btn">
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <button className="add-btn" onClick={onAdd}>Enviar al Carrito</button>
            </div>
        </div>
    );

};

export default ItemCount

