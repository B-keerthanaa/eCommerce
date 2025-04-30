import React from "react";
import { Link, useLocation } from "react-router-dom";

function Submenu() {
    const location = useLocation();

    const decodedPath = decodeURIComponent(location.pathname);

    const validPaths = [
        "/electronics",
        "/jewelery",
        "/men's clothing",
        "/women's clothing"
    ];

    if (!validPaths.includes(decodedPath)) {
        return null;
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', padding: '10px' }}>
            <Link
                to="/electronics"
                style={linkStyle}
            >
                Electronics
            </Link>
            <Link
                to="/jewelery"
                style={linkStyle}
            >
                Jewelery
            </Link>
            <Link
                to="/men's clothing"
                style={linkStyle}
            >
                Men's Clothing
            </Link>
            <Link
                to="/women's clothing"
                style={linkStyle}
            >
                Women's Clothing
            </Link>
        </div>
    );
}


const linkStyle = {
    backgroundColor: '#007bff',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'none',
    display: 'inline-block',
};

export default Submenu;
