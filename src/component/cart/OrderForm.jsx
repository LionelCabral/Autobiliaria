import React, { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import './Cart.css'

const OrderForm = ({ cart, total }) => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        mail: "",
    });
    
    const addOrder = () => {
        const order = { buyer: form, cart, total };
        
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        console.log (total)
        addDoc(ordersCollection, order)
        .then (({id}) => console.log (id));
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addOrder();
    };

    const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    });
    };

    return (
        <div>
        <h5>Solicitud de compra</h5>
        <form onSubmit={handleSubmit} className='form'>
            <label htmlFor='name'> Nombre </label>
            <input type='text' name='name' onChange={handleChange} />
            <label> Telefono </label>
            <input type='text' name='phone' onChange={handleChange} />
            <label> Mail </label>
            <input type='text' name='mail' onChange={handleChange} />
            <input type='submit' />
        </form>
        </div>
    );
};

export default OrderForm;