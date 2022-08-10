import React, { useState } from "react";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import './Cart.css'

const OrderForm = ({ cart, total, clear}) => {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        mail: "",
        mail2: ""
    });
    
    const addOrder = () => {
        const fecha = new Date();
        const order = { buyer: form, cart, total, fecha};
        console.log (fecha)
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then (({id}) => alert (`Gracias por tu compra tu numero de pedido es: ${id}`))
        clear()
    };

    const handleSubmit = (e) => {
            e.preventDefault(); 
            form.mail === form.mail2 ? addOrder() : alert('mails diferentes') 
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
            <label> Confirmacion de email </label>
            <input type='text' name='mail2' onChange={handleChange} />
            <button type='submit'>Realizar compra</button>
        </form>
        </div>
    );
};

export default OrderForm;