import React, { useEffect, useState } from "react";
import './category.css';
import { Link } from "react-router-dom";

function Womens() {

  const [things, setThings] = useState([]);

  useEffect(() => {

    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then(res => res.json())
      .then(json => setThings(json))
  }, []);


  return (
    <>
      <div className="d-flex justify content-center ">
        {
          things.map((v) =>
            <>
            <div className="container">
              <div className="card" >
                <div className="card-body">

                  <h5>Product id:{v.id}</h5>
                  <img src={v.image} height="200px" width="200px" ></img>
                  <h5>{v.title}</h5>
                  <h5>Cost ${v.price}</h5>
                  <Link to={`/${v.id}`}>
                    <button className="btn btn-primary">Buy Now</button></Link>
                </div>
              </div>
</div>
            </>

          )}
          
      </div>

    </>
  )
}
export default Womens;