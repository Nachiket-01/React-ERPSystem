import React, { useState } from 'react';
import './OrdersManagement.css'; // Import the CSS file for styling

const OrdersManagement = () => {
    // Mock data for orders
    const mockOrders = [
        { id: 1, customerName: 'John Doe', orderDate: '2024-03-10', status: 'Pending' },
        { id: 2, customerName: 'Jane Smith', orderDate: '2024-03-11', status: 'Shipped' },
        // Add more orders as needed
    ];

    const [orders, setOrders] = useState(mockOrders);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [newStatus, setNewStatus] = useState('');

    // Function to delete an order
    const handleDeleteOrder = (orderId) => {
        const updatedOrders = orders.filter(order => order.id !== orderId);
        setOrders(updatedOrders);
    };

    // Function to view order details
    const viewOrderDetails = (orderId) => {
        const order = orders.find(order => order.id === orderId);
        setSelectedOrder(order);
    };

    // Function to update order status
    const updateOrderStatus = () => {
        if (selectedOrder) {
            const updatedOrders = orders.map(order => {
                if (order.id === selectedOrder.id) {
                    return {
                        ...order,
                        status: newStatus
                    };
                }
                return order;
            });
            setOrders(updatedOrders);
            setSelectedOrder(null);
            setNewStatus('');
        }
    };

    return (
        <div className="orders-management">
            <h2 className="orders-title">Orders Management</h2>
            <ul className="orders-list">
                {orders.map(order => (
                    <li key={order.id} className="order-item">
                        <div className="order-details">
                            <p><strong>Order ID:</strong> {order.id}</p>
                            <p><strong>Customer Name:</strong> {order.customerName}</p>
                            <p><strong>Order Date:</strong> {order.orderDate}</p>
                            <p><strong>Status:</strong> {order.status}</p>
                        </div>
                        <div className="order-actions">
                            <button onClick={() => viewOrderDetails(order.id)}>View Details</button>
                            <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            {selectedOrder && (
                <div className="order-details-modal">
                    <h3>Order Details</h3>
                    <p><strong>Order ID:</strong> {selectedOrder.id}</p>
                    <p><strong>Customer Name:</strong> {selectedOrder.customerName}</p>
                    <p><strong>Order Date:</strong> {selectedOrder.orderDate}</p>
                    <p><strong>Status:</strong> {selectedOrder.status}</p>
                    <input type="text" value={newStatus} onChange={(e) => setNewStatus(e.target.value)} placeholder="New Status" />
                    <button onClick={updateOrderStatus}>Update Status</button>
                    <button onClick={() => setSelectedOrder(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default OrdersManagement;
