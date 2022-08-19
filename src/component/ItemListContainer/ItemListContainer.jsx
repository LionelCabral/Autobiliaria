import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';


const ItemListContainer = () => {
        const [items, setItems] = useState([])
        const [loaded,setLoaded] = useState (true);
        const { category } = useParams()
    
    
            useEffect(() => {
                const querydb = getFirestore ();
                const queryCollection = collection (querydb, 'items');

                const seeCategories = () => {
                    const queryFilter = query (queryCollection, where('category', '==', category))
                    seeAll(queryFilter)
                }
                const seeAll = (props) => {
                    getDocs (props)
                    .then (res => setItems(res.docs.map(item =>({...item.data(), id: item.id}))))
                    setLoaded(false);
                }
                category ? seeCategories() : seeAll(queryCollection);                

                // if(category){
                //     alert (typeof category)
                //     const queryFilter = query (queryCollection, where('category', '==', category))
                //     getDocs (queryFilter)
                //     .then (res => setItems(res.docs.map(item =>({...item.data(), id: item.id}))))
                // } else {
                //     alert (typeof category)
                //     getDocs (queryCollection)
                //     .then (res => setItems(res.docs.map(item =>({...item.data(), id: item.id}))))
                // }
    
            }, [category]);
    
    return (<> { loaded ? <Loader /> : <ItemList items={items}/> }  </>)
};


export default ItemListContainer;