import React from "react";
import {Outlet} from "react-router-dom";

import Header from "./header";
import Footer from "./footer";

class Layout extends React.Component{
    render(){
        return(
            <>
            <Header />
            <section>
                <article>
                    <Outlet />
                </article>
            </section>
            <Footer />
            </>
        )
    }
}
export default Layout;