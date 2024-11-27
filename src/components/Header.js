import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token from storage
    navigate('/'); // Redirect to login page
  };

  const isAuthenticated = !!localStorage.getItem('token'); // Check if user is logged in

  return (
    <header style={headerStyles}>
      <nav>
        <ul style={navListStyles}>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/employees" style={linkStyles}>
                  Employee List
                </Link>
              </li>
              <li>
                <Link to="/employees/add" style={linkStyles}>
                  Add Employee
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} style={buttonStyles}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/" style={linkStyles}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" style={linkStyles}>
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

// Styles
const headerStyles = {
  backgroundColor: '#333',
  padding: '10px 20px',
  color: '#fff',
};

const navListStyles = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const linkStyles = {
  textDecoration: 'none',
  color: '#fff',
  marginRight: '20px',
};

const buttonStyles = {
  backgroundColor: '#f44336',
  color: '#fff',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
  borderRadius: '5px',
};

export default Header;
