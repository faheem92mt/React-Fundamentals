// js entry point
// everytime u wanna create a component = u need to create a function

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const author = 'Dr. Ali AlBarghouthi'
const title = 'Heart Therapy'
const img = './images/HH96.png'

// const Greeting = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <Person></Person>
//       <Message></Message>
//     </div>
//   )
// }

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

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
