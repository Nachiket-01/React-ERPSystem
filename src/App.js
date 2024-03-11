// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import OrdersCalendar from './components/OrdersCalendar';
import './App.css'; 

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/products">Manage Products</Link></li>
                        <li><Link to="/orders">Manage Orders</Link></li>
                        <li><Link to="/calendar">Orders Calendar</Link></li> 
                    </ul>
                </nav>

                <Routes>
                    <Route exact path="/React-ERPSystem" element={<Dashboard />} />
                    <Route path="/products" element={<ProductsManagement />} />
                    <Route path="/orders" element={<OrdersManagement />} />
                    <Route path="/calendar" element={<OrdersCalendar />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
