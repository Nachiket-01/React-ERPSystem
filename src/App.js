import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProductsManagement from './components/ProductsManagement';
import OrdersManagement from './components/OrdersManagement';
import OrdersCalendar from './components/OrdersCalendar';
import './App.css';

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div>
        {isMobile ? (
          <>
            <span className="open-btn" style={{ fontSize: '30px', cursor: 'pointer',color: 'white' }} onClick={openSidebar}>&#9776;</span>
            <div id="mySidenav" className="sidenav" style={{ width: sidebarOpen ? '250px' : '0' }}>
              <a href="javascript:void(0)" className="closebtn" onClick={closeSidebar}>&times;</a>
              <ul>
                <li><Link to="/React-ERPSystem" onClick={closeSidebar}>Dashboard</Link></li>
                <li><Link to="/products" onClick={closeSidebar}>Manage Products</Link></li>
                <li><Link to="/orders" onClick={closeSidebar}>Manage Orders</Link></li>
                <li><Link to="/calendar" onClick={closeSidebar}>Orders Calendar</Link></li>
              </ul>
            </div>
          </>
        ) : (
          <nav>
            <ul>
              <li><Link to="/React-ERPSystem">Dashboard</Link></li>
              <li><Link to="/products">Manage Products</Link></li>
              <li><Link to="/orders">Manage Orders</Link></li>
              <li><Link to="/calendar">Orders Calendar</Link></li> 
            </ul>
          </nav>
        )}

        <main>
          <Routes>
            <Route exact path="/React-ERPSystem" element={<Dashboard />} />
            <Route path="/products" element={<ProductsManagement />} />
            <Route path="/orders" element={<OrdersManagement />} />
            <Route path="/calendar" element={<OrdersCalendar />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
