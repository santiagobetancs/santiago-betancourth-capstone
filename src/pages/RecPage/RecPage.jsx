import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './RecPage.scss'
import categories from '../../categories/categories'
import axios from 'axios'
import { useState } from 'react' 


export default function RecPage() {
    
    const apiKey = "shVlTVz1U2fJIR3OCfRNXPOjExf7vM1k"
    const [books, setBooks] = useState()

    const onSubmit = async (e) => {
        e.preventDefault()
        const result = await axios.get(`https://api.nytimes.com/svc/books/lists/current/${e.target.list_name.value}.json?api-key=${apiKey}`)
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
                                const { list_name, display_name, list_name_encoded } = cat
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
                            const { title, book_image } = book.book_details[0]
                            return (
                                <div key={title} className='rec__div'>
                                    <img className='rec__img' src={book_image} alt="img" />
                                    <h4 className='rec__subtitle'>
                                        {title}
                                    </h4>
                                </div>
                            )
                        })}
                    </div>
                )}
            </main>
            <Footer />
        </>
    )
}