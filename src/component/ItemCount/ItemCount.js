import { useState } from "react";
import "./ItemCount.css";


const ItemCount = ({stock, initial,price, onAdd}) => {
    const [count, setCount] = useState (initial)

    const restar = () => {
        (count > initial) && setCount(count -1);
        }
    

    const sumar = () => {
        (count <= stock) && setCount(count +1);
        }
    

    return (
        <div className="counter">
            <div className="counter-btn">
                <button onClick={restar}>-</button>
                <p>{count}</p>
                <button onClick={sumar}>+</button>
            </div>
            <div>
                <span style={{color:"green", fontSize:"1.2em"}}><b>Total: ${count * price}</b></span>
                <button className="add-btn" onClick={() => onAdd(count)}>
                    Enviar al Carrito
                </button>
            </div>
        </div>
    );

};

export default ItemCount

