import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
    const {name, price, img, stock, description, extra} = item
    console.log(name)
const onAdd = (stock) => {
    console.log("seleccionaste ", stock, " items")
}

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
        
        <ItemCount stock={stock} initial={1} price={price} onAdd={onAdd}/>
    </div>
    </div>
);
};

export default ItemDetail;