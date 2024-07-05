import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './RecPage.scss'
import categories from '../../categories/categories'
import axios from 'axios'
import { useState } from 'react' 
import React from 'react'
import BookCard from '../../components/BookCard/BookCard'


export default function RecPage() {

    const [books, setBooks] = useState()

    const onSubmit = async (e) => {
        e.preventDefault()
        const result = await axios.get(`http://localhost:8080/users/nyt/${e.target.list_name.value}`)
        setBooks(result)
    }
    
    const shuffle = (array) => { 
        return array.sort(() => Math.random() - 0.5); 
    }; 
    
    if (books) {
        const array = books.data.body
        const shuffledArray = shuffle(array); 
    }

    return (
        <>
            <Header />
            <main className='rec'>
                <form onSubmit={onSubmit} className='rec__form'>
                    <h1 className='rec__title'>
                        Get a recommendation!
                    </h1>
                    <div className='rec__container'>
                        <select name="list_name" className='rec__select' id="list_name" >
                            <option className='rec__option rec__option--placeholder' defaultValue>
                                Select a category!
                            </option>
                            {categories.map((cat) => {
                                const { list_name, list_name_encoded } = cat
                                return (
                                    <option name="list_name" className='rec__option' key={list_name} value={list_name_encoded}>
                                            {list_name}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <button type="submit" className='rec__button'>
                        SUBMIT
                    </button>
                </form>
                {books && (
                    <div className='rec__recs'>
                        {books.data.body.slice(0, 3).map((book) => {
                            const { title, book_image, author, amazon_product_url, description } = book.book_details[0]
                            return (
                                <BookCard title={title} book_image={book_image} author={author} amazon_product_url={amazon_product_url} description={description} />
                            )
                        })}
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}