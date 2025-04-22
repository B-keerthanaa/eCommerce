import { BrowserRouter,Routes,Route} from "react-router-dom";
import React from "react";
import Category from './category'
import Layout from './layout';
import Electronic from "./electronics";
import Jewellery from "./jewellery";
import Mens from "./mens_cloth";
import Womens from "./womens_cloth";
import Product from "./productdetails";
import Login from "./login";
import Signup from "./signup";
class Routingdata extends React.Component{
    render(){
        return(
            <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                   <Route index element={<Category />}/>
                   <Route path="electronics" element={<Electronic />}/>
                <Route path="jewelery" element={<Jewellery />}/>
                <Route path="men's clothing" element={<Mens />}/>
                <Route path="women's clothing" element={<Womens />}/>
                <Route path="/:id" element={<Product />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                </Route>
            </Routes>
            </BrowserRouter>
            </>
        )
    }
}
export default Routingdata;