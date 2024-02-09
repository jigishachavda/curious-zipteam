import React from 'react'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import ContactModal from '../components/modals/ContactModal'
import PageTemplate from '../components/templates/page-template'

export default function Layout({ children, ...rest }) {
    return (
        <>
            <PageTemplate {...rest} />
            <Header {...rest} />
            {children}
            <Footer />
            <ContactModal />
        </>
    )
}
