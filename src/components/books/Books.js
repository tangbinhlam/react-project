import './Books.css';

const books = [
    {
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/817T4J3dzhL._AC_UL200_SR200,200_.jpg',
        title: 'If Animals Kissed Good Night',
        author: 'Ann Whitford Paul',
        cost: 4.79,
    },
    {
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/910lu-HKDYL._AC_UL200_SR200,200_.jpg',
        title: 'Little Blue Truck\'s Valentine',
        author: 'Alice Schertle',
        cost: 12.19,
    },
    {
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/A1elFK9VYEL._AC_UL200_SR200,200_.jpg',
        title: 'Bronco and Friends: A Party to Remember',
        author: 'Tim Teblow',
        cost: 15.22,
    }
]

function Books() {
    return <section className='book-list'>{books.map(book => {
        return <Book book={book} />
    })}
    </section>
}

const Book = (props) => {
    const { image_url, title, author, cost, children } = props.book
    return <article className='book'>
        <img src={image_url} alt={title} />
        <h1 style={{ color: 'blue' }}>{title}</h1>
        <h4>{author}</h4>
        <h5>{cost}</h5>
        <p>{children}</p>
        <p>This is new branch</p>
        <p>Dev brach update 1</p>
        <p>This is second update</p>
    </article>
}

export default Books;
