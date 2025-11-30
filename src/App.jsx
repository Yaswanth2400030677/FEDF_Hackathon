import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './styles.css';


export default function App() {
const [user, setUser] = useState(null);


function handleLogin(username) {
setUser({ name: username });
}


function handleLogout() {
setUser(null);
}


return (
<div className="app-root">
{!user ? (
<Login onLogin={handleLogin} />
) : (
<Dashboard user={user} onLogout={handleLogout} />
)}
</div>
);
}