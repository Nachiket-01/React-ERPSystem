import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import OrdersCalendar from './components/OrdersCalendar';
import './App.css';

// Custom component to redirect to homepage
const RedirectToHomepage = () => {
  useEffect(() => {
    window.location.href = '/React-ERPSystem'; // Redirect to homepage
  }, []);

  return null;
};

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/React-ERPSystem">Dashboard</Link></li>
                        <li><Link to="/React-ERPSystem/products">Manage Products</Link></li>
                        <li><Link to="/React-ERPSystem/orders">Manage Orders</Link></li>
                        <li><Link to="/React-ERPSystem/calendar">Orders Calendar</Link></li> 
                    </ul>
                </nav>

                <Routes>
                    <Route exact path="/" element={<RedirectToHomepage />} />
                    <Route path="/React-ERPSystem" element={<Dashboard />} />
                    <Route path="/products" element={<ProductsManagement />} />
                    <Route path="/orders" element={<OrdersManagement />} />
                    <Route path="/calendar" element={<OrdersCalendar />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
