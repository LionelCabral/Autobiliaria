import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import products from "../../mock/products";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const [Loaded,setLoaded] = useState (true);
    const { category } = useParams();
    console.log(category)
    const traerProductos = () => {
        return new Promise (resolve => {
            setLoaded (true)
            setTimeout(()=>{
                resolve(
                    category ? products.filter(obj => obj.category === category) : products
                );
            }, 1000)
        });
    };

    useEffect( () => {
            traerProductos().then(res => {
                    setItems(res);
                    setLoaded(false);
            });
    }, [category]);
    console.log(items)
    return (<> { Loaded ? <Loader /> : <ItemList items={items}/> }  </>)
};

export default ItemListContainer;