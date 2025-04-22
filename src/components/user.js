import React, { useEffect, useState,useNavigate } from "react";
import './category.css';
import { useNavigate, Link } from "react-router-dom";


function User() {
    const navigate = useNavigate();
   
    const [things, setThings] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => {
                if (!res.ok) throw new Error('Failed to fetch');
                return res.json();
            })
            .then(json => setThings(json))
            .catch(error => console.error("Error fetching categories:", error));
    }, []);
 const box= {height:"250px",width:"250px"};
    return (
        <>
        <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><img src={process.env.PUBLIC_URL+"./logo.png"} alt="logo" height="50px"></img></li>
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#services">Services</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
        <ul>
        <button className="btn btn-success me-2" onClick={() => navigate('/')}>Logout</button>
        </ul>
      </nav>
            <div className=" container">
                {
                    things.map((v,index) =>(
                        <>
                            <div className="card" style={box} >
                                <div className="card-body">

                                    <h1 className="card-title">{v}</h1>
                                    <span><Link to={`/${v}`}>{v}</Link></span>

                                </div>
                            </div>
                        </>
                    )
                    )}
            </div>

        </>
    )
}
export default User;