import React from "react";
import './category.css';
import { Link } from "react-router-dom";
import useFetch from "./customhooks";

function Category() {

    //const [things, setThings] = useState([]);
    const [things] = useFetch("https://fakestoreapi.com/products/categories");
    
    /*useEffect(() => {

        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(json => setThings(json))
    }, []);*/
 
    return (
        <>
            <div className="d-flex justify-content-centre flex wrap">
                {
                    things.map((v) =>
                        <>
                            <div className="cards">
                                <div className="card-body">
                                   <h1 className="card-title">{v}</h1>
                                    <span><Link to={`/${v}`}>{v}</Link></span>

                                </div>
                            </div>
                        </>

                    )}
            </div>
            <div className="box mt-4 mb-4">
            <center>
             <Link
                            to="/allproducts"
                            style={{backgroundColor: '#007bff',
                                border: 'none',
                                color: 'white',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                display: 'inline-block',}}
                        >
                            All products
                        </Link>
            </center>
            </div>
        </>
    )
}
export default Category;