import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Reservations from './pages/Reservations';
import Menu from './pages/Menu';
import Payments from './pages/Payments';
import Profile from './pages/Profile';

export default function App(){
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/payments">Payments</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/orders" element={<Orders/>} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/payments" element={<Payments/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}
