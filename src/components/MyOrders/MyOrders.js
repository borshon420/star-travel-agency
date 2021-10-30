import React, { useEffect, useState } from 'react';
import Orders from '../Orders/Orders';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        fetch('https://nameless-brook-91912.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div style={{marginBottom: '400px'}} className="mt-5">
            <h1 className="mb-5">My All Orders: {orders.length}</h1>
            <div className="services-container mb-5">
                {
                    orders.map(order => <Orders 
                        key={order._id}
                        order={order}
                    ></Orders>)
                }
            </div>
        </div>
    );
};

export default MyOrders;