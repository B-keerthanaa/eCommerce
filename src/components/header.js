import React from "react";
import './header.css';
import { useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
              return (
                <nav  className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
                  <ul className="navbar-list">
                    <li className="navbar-item"><img src={process.env.PUBLIC_URL+"./logo.png"} height="50px"></img></li>
                    <li className="navbar-item"><a href="#home">Home</a></li>
                    <li className="navbar-item"><a href="./about">About</a></li>
                    <li className="navbar-item"><a href="./services">Services</a></li>
                    <li className="navbar-item"><a href="./contact">Contact</a></li>
                  </ul>
                  <ul>
                   <button className="btn btn-success me-3" onClick={() => navigate('/login')}>Login</button>
                  <button className="btn btn-success me-2" onClick={() => navigate('/')}>Logout</button>
                  </ul>
                </nav>
              );
            }
       
    export default Header;

    