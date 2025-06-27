import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/api">API Data</Link></li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}
