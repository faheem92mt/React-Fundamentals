// js entry point
// everytime u wanna create a component = u need to create a function

import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const bookOne = {
  author: 'Dr. Ali AlBarghouthi',
  title: 'Heart Therapy',
  img: './images/HH96.png',
}

const bookTwo = {
  author: 'Dr. Tarek as Suwaidan',
  title: '60 Great Women Enshrined in Islamic History',
  img: './images/60.jpg',
}

const bookThree = {
  author: 'Nihad Sayyid',
  title: 'Keys to a Successful Marital Life',
  img: './images/keys.jpg',
}

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
      <Book author={bookOne.author} title={bookOne.title} img={bookOne.img}>
        {/* <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
          repudiandae inventore eos qui animi sed iusto alias eius ea sapiente.
        </p>
        <button>click me</button> */}
      </Book>
      <Book author={bookTwo.author} title={bookTwo.title} img={bookTwo.img} />
      <Book
        author={bookThree.author}
        title={bookThree.title}
        img={bookThree.img}
      />
    </section>
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

const Book = (props) => {
  const { img, title, author, children } = props
  return (
    <article className="book">
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      {children}
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
