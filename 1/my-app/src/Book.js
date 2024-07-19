const Book = (props) => {
  // const { img, title, author, children } = props.book
  const { img, title, author, id } = props

  // const getSingleBook = () => {
  //   getBook(id)
  // }

  return (
    <article className="book">
      <p>{id}</p>
      <img src={img} alt={title}></img>
      <h2>{title}</h2>
      <h4>{author}</h4>
      {/* <button onClick={() => console.log(title)}>click me</button>
      <button onClick={getSingleBook}>Display Value</button> */}
    </article>
  )
}

export default Book
