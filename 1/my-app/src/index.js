// js entry point
// everytime u wanna create a component = u need to create a function

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

// const Greeting = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <Person></Person>
//       <Message></Message>
//     </div>
//   )
// }

// const names = ['faheem', 'ibn', 'habib']
// const fullName = names.map((name) => {
//   // console.log(name)
//   return <h1>{name}</h1>
// })

const BookList = () => {
  // const someValue = 'ShakeAndBake'

  // const displayValue = () => {
  //   console.log(someValue)
  // }

  // const getBook = (id) => {
  //   const book = books.find((book) => book.id === id)
  //   console.log(book)
  // }

  // gotcha -
  // getBook(2)

  return (
    <>
      <h1>Dakwah Corner Bookstore</h1>
      <section className="booklist">
        {/* <EventExamples /> */}
        {books.map((book, index) => {
          // type #1 - props
          // const { img, title, author, id } = book
          // return <Book img={img} title={title} author={author} key={id} />

          // type #2 - props.book
          // return <Book book={book} key={book.id} />

          // type #3 - props
          return <Book {...book} number={index} key={book.id} />
        })}
      </section>
    </>
  )
}

// const Book = (props) => {
//   return (
//     <article className="book">
//       <img src={props.img} alt={props.title}></img>
//       <h2>{props.title}</h2>
//       <h4>{props.author}</h4>
//     </article>
//   )
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const Image = () => <img src="./images/HH96.png" alt="Heart Therapy"></img>
// const Title = () => <h2>Heart Therapy</h2>
// const Author = () => {
//   return (
//     <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
//       Dr. Ali AlBarghouthi
//     </h4>
//   )
// }

// const Person = () => {
//   return <h1>Faheem Ibn Habib</h1>
// }

// const Message = () => {
//   return <p>This is my message1</p>
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
