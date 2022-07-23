import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({item}) => {
    const {name, price, img, stock, description, extra} = item
    const [cantidad, setCantidad] = useState(0);
    const { addItem } = useContext(CartContext);

    const onAdd = (cantidad) => {
        setCantidad(cantidad);
        addItem(item, cantidad);
    };

return (
    <div className="itemDetail">
    <div className="img-detail-cont">
        <img src={img} alt={name} className="img-detail" />
    </div>
    <div className="text-container">
        <div className="titulo-container">
            <h1>{name}</h1>
            {extra && <span>{extra}</span>}
            <h3 style={{color: "whitesmoke"}}>${price}</h3>
        </div>
        <p> {description} </p>
        
        {cantidad === 0 ? (
            <ItemCount stock={stock} initial={1} price={price} onAdd={onAdd}/>
        ) : (<Link to="/cart">Ir al carrito</Link>)
        }
    </div>
    </div>
);
};

export default ItemDetail;