import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import {doc, getDoc, getFirestore} from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [item, setItem] = useState ({})
    const [loaded,setLoaded] = useState (true);
    const {id}=useParams()
    
    
    
    
    useEffect(() => {
        const querydb = getFirestore ();
        const queryDoc = doc(querydb, 'items', id  ) ;
        getDoc (queryDoc)
        .then(res => setItem({id: res.id, ...res.data()})) 
        setLoaded(false)
    }, [id]);
    
    
    return(<>{loaded ? < Loader /> : <ItemDetail item={item} /> }</>)
};

export default ItemDetailContainer;