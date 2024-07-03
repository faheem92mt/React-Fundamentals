// js entry point
// everytime u wanna create a component = u need to create a function

import React from 'react'
import ReactDOM from 'react-dom/client'

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
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src="https://www.dakwahbookstore.com/wp-content/uploads/2018/05/HH96.png"
    alt="Heart Therapy"
  ></img>
)
const Title = () => <h2>Heart Therapy</h2>
const Author = () => {
  return <h4>Dr. Ali AlBarghouthi</h4>
}

// const Person = () => {
//   return <h1>Faheem Ibn Habib</h1>
// }

// const Message = () => {
//   return <p>This is my message1</p>
// }

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
