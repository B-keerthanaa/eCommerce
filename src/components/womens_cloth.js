import React from "react";
import './category.css';
import { Link } from "react-router-dom";
import useFetch from "./customhooks";

function Womens() {

  const [things] = useFetch("https://fakestoreapi.com/products/category/women's clothing");
  return (
    <>
      <div className="d-flex justify content-center ">
        {
          things.map((v) =>
            <>
           
              <div className="card" >
              <div className="card-body text-center d-flex flex-column justify-content-between">

                  <h5>Product id:{v.id}</h5>
                  <img src={v.image} height="200px" width="200px" ></img>
                  <h5>{v.title}</h5>
                  <h5>Cost ${v.price}</h5>
                  <Link to={`/${v.id}`} className="mt-auto">
                    <button className="btn btn-primary">View Details</button></Link>
                </div>
              </div>

            </>

          )}
          
      </div>

    </>
  )
}
export default Womens;