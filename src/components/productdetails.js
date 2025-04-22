import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './category.css';
 function Product(){
    
const{id}=useParams();
const [Item, setItem] = useState(null);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(json => setItem(json));
 }, [id]);

if(!Item){
  return(
    
    <h3>Loading...</h3>
   
  )
}
    return (
        <>
        <div className="d-flex justify content-center">
          <div className="container">
  <div className="col-sm-6">
    <div className="carde">
      <div className="carde-body">
        <h5>Product Id:{Item.id} </h5>
        <img src={Item.image} height="200px" width="200px"></img>
        <h4 className="card-title">{Item.title} </h4>
        <h5>Cost ${Item.price} </h5>
        <p>{Item.description}</p>
        <h6>Category:{Item.category}</h6>
        <h4>Rate:{Item.rating.rate}</h4>
        <h4>Count:{Item.rating.count}</h4>
        <button className="btn btn-primary">Add to Cart</button>
     </div>
    </div>
  </div>
    </div>
      
        </div>
        </>
    );
}

 export default Product;