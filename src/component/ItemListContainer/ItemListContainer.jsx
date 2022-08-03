import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemListContainer = () => {
        const [items, setItems] = useState([])
        const [Loaded,setLoaded] = useState (true);
        const { category } = useParams()
    
    
            useEffect(() => {
                const querydb = getFirestore ();
                const queryCollection = collection (querydb, 'items');
                if(category){
                const queryFilter = query (queryCollection, where('category', '==', category))
                getDocs (queryFilter)
                .then (res => setItems(res.docs.map(item =>({...item.data(), id: item.id}))))
                } else {
                    getDocs (queryCollection)
                    .then (res => setItems(res.docs.map(item =>({...item.data(), id: item.id}))))
                }
                setLoaded(false)
    
            }, [category]);
    
    return (<> { Loaded ? <Loader /> : <ItemList items={items}/> }  </>)
};


export default ItemListContainer;