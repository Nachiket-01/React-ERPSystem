import React, { useState } from 'react';
import './OrdersCalendar.css'; // Import the CSS file for styling

const OrdersCalendar = () => {
    // Dummy data for orders with dates and details
    const orders = [
        { date: '2024-03-10', details: [
            { orderId: 1, customerName: 'John Doe', orderDate: 'March 10, 2024', status: 'Pending' },
            { orderId: 2, customerName: 'Jane Smith', orderDate: 'March 10, 2024', status: 'Shipped' },
            { orderId: 3, customerName: 'Alice Johnson', orderDate: 'March 10, 2024', status: 'Delivered' },
            { orderId: 4, customerName: 'Bob Williams', orderDate: 'March 10, 2024', status: 'Pending' },
            { orderId: 5, customerName: 'Eva Brown', orderDate: 'March 10, 2024', status: 'Shipped' }
        ] },
        { date: '2024-03-11', details: [
            { orderId: 6, customerName: 'Michael Davis', orderDate: 'March 11, 2024', status: 'Delivered' },
            { orderId: 7, customerName: 'Sophia Miller', orderDate: 'March 11, 2024', status: 'Pending' },
            { orderId: 8, customerName: 'David Wilson', orderDate: 'March 11, 2024', status: 'Shipped' },
            { orderId: 9, customerName: 'Olivia Moore', orderDate: 'March 11, 2024', status: 'Delivered' },
            { orderId: 10, customerName: 'James Taylor', orderDate: 'March 11, 2024', status: 'Pending' }
        ] },
        // Add more orders for other dates as needed
    ];

    // State to store the selected date and its corresponding order details
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedOrders, setSelectedOrders] = useState([]);

    // Function to handle date click
    const handleDateClick = (date, orders) => {
        setSelectedDate(date);
        setSelectedOrders(orders);
    };

    // Function to filter orders based on the selected date
    const filteredOrders = selectedDate ? orders.find(order => order.date === selectedDate)?.details : [];

    return (
        <div className="orders-calendar">
            <h2>Orders Calendar View</h2>
            <div className="calendar">
                {/* Calendar days */}
                {orders.map(order => (
                    <div key={order.date} className={`calendar-day ${selectedDate === order.date ? 'selected' : ''}`} onClick={() => handleDateClick(order.date, order.details)}>
                        {order.date}
                    </div>
                ))}
            </div>
            {/* Display orders for the selected date in a table format */}
            <div className="order-details">
                <h4>{selectedDate ? `Orders for ${selectedDate}` : 'Select a date to view orders'}</h4>
                {selectedOrders.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer Name</th>
                                <th>Order Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredOrders.map(order => (
                                <tr key={order.orderId}>
                                    <td>{order.orderId}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.orderDate}</td>
                                    <td>{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Please Select date </p>
                )}
            </div>
        </div>
    );
};

export default OrdersCalendar;
