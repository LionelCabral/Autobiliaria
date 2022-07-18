import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";
import products from "../../mock/products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [cargando, setCargando] = useState(true)
    const { id } = useParams();

    const traerItemPorId = () => {
        return new Promise(resolve => {
            setTimeout(() => {
            resolve(
                products.find(obj => obj.id === Number(id))
            );
            }, 1000);
        });
    };

    useEffect(() => {
        traerItemPorId().then(res => {
            setItem(res);
            setCargando(false)
        })
    },[id]);
    console.log(item)
    return(<>{cargando ? <Loader /> : <ItemDetail item={item} /> }</>)
};

export default ItemDetailContainer;