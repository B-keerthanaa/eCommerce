import React from "react";
import {Outlet} from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Submenu from "./submenu";
import Category from "./category";

function Layout(){
     
        return(
            <>
            <Header />
             <Submenu />
            <section>
                <article>
                    <Outlet />
                </article>
            </section>
            <Footer />
            </>
        )
    }

export default Layout;