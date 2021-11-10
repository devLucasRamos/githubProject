import React from "react";

function Layout({children}){
    return (
        <section>
            <header>
                Header
            </header>
            {children}
        </section>
    )
}

export default Layout;