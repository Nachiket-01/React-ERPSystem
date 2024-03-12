// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css'; // Import the CSS file for styling

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h2 className="dashboard-title">Dashboard</h2>
            <div className="metrics-container">
                <div className="metric">
                    <h3>Total Products</h3>
                    <span>100</span>
                </div>
                <div className="metric">
                    <h3>Total Orders</h3>
                    <span>50</span>
                </div>
                <div className="metric">
                    <h3>Total Customers</h3>
                    <span>150</span>
                </div>
                <div className="metric">
                    <h3>Total Sales</h3>
                    <span>$5000</span>
                </div>
            </div>
            <div className="actions-container">
                <Link to="/products" className="action-link">Manage Products</Link>
                <Link to="/orders" className="action-link">Manage Orders</Link>
                {/* <Link to="/customers" className="action-link">Manage Customers</Link> */}
                <Link to="/calendar" className="action-link">Sales Analytics</Link>
                {/* <Link to="/users" className="action-link">User Management</Link> */}
                {/* <Link to="/inventory" className="action-link">Inventory Management</Link> */}
            </div>
        </div>
    );
};

export default Dashboard;