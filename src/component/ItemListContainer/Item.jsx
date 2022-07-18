import { Link } from "react-router-dom"
import "./ItemListContainer.css";

const Item = ({name, img, extra, price, id}) => {
    return (
        <div className="card-container">
        <div className="img-container">
            <img src={img} alt={name} className="img-item" />
        </div>

        <h3 className="">{name}</h3>
        <h4>${price}</h4>
        {extra && <span>{extra}</span> }
        <Link to={`/item/${id}`}><button>DETALLE</button></Link>
    </div>
    )
};

export default Item
