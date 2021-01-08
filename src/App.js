import './App.css';

function App() {
  return <section className='book-list'>
    <Book />
    <Book />
    <Book />
    <Book />
  </section>
}

const Book = () => {
  return <article className='book'>
    <Image />
    <Title />
    <Author />
  </article>
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg" alt="Untamed" />
}

const Title = () => {
  return <h1>If Animals Kissed Good Night</h1>
}
const Author = () => {
  return <h4>Ann Whitford Paul</h4>
}
export default App;
