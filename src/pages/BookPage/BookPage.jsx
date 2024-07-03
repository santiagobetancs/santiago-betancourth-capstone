import { useLocation } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './BookPage.scss'
import React from 'react'

export default function BookPage(props) {
    let { state } = useLocation()
    console.log(state)

    return (
        <>
            <Header />
            <main className='book'>

            </main>
            <Footer />        
        </>
    )
}