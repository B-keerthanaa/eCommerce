import React from "react";
import './category.css';
import { Link } from "react-router-dom";
import useFetch from "./customhooks";

function Mens() {
  const [things] = useFetch("https://fakestoreapi.com/products/category/men's clothing");

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
export default Mens;