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
 const box= {height:"250px",width:"250px"};
    return (
        <>
            <div className=" container">
                {
                    things.map((v) =>
                        <>
                            <div className="card"  >
                                <div className="card-body">

                                    <h1 className="card-title">{v}</h1>
                                    <span><Link to={`/${v}`}>{v}</Link></span>

                                </div>
                            </div>
                        </>

                    )}
            </div>

        </>
    )
}
export default Category;