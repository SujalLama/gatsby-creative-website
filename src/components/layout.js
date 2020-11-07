import React from 'react'
import Footer from './footer'
import Header from './header'
import {Container} from 'reactstrap';

const Layout = ({children}) => {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

export default Layout
