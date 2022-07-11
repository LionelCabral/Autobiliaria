import { useEffect, useState } from "react"
import { products } from "../mock/products";
import ItemList from "./ItemList";


const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([])
    useEffect(() => {
        const traerProductos = new Promise ((res, rej) =>{
            setTimeout(()=>{
                res(products);
            }, 2000)
        });
        traerProductos
            .then((data)=>{
                setItems(data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    
    return (
        <div>
            <ItemList items={items}/>
        </div>
    )
};
export default ItemListContainer;