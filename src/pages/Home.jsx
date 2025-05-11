import React from 'react';
import BookCard from '../components/BookCard';
import './Home.css';
import './PageWrapper.css';

const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: 'https://covers.openlibrary.org/b/id/7222246-L.jpg',
    description: 'A story about the Jazz Age and lost love.',
    rentPrice: "₹99",
    buyPrice: "₹299",
  },
  {
    title: '1984',
    author: 'George Orwell',
    image: 'https://covers.openlibrary.org/b/id/7222241-L.jpg',
    description: 'A dystopian novel on surveillance and control.',
    rentPrice: "₹99",
    buyPrice: "₹299",
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    image: 'https://covers.openlibrary.org/b/id/8228691-L.jpg',
    description: 'A timeless classic on race and justice.',
    rentPrice: "₹99",
    buyPrice: "₹299",
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    image: 'https://covers.openlibrary.org/b/id/6979861-L.jpg',
    description: 'An epic fantasy adventure.',
    rentPrice: "₹99",
    buyPrice: "₹299",
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    image: 'https://covers.openlibrary.org/b/id/8231856-L.jpg',
    description: 'A romantic novel of manners.',
    rentPrice: "₹99",
    buyPrice: "₹299",
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    image: 'https://covers.openlibrary.org/b/id/8232005-L.jpg',
    description: 'A story of teenage angst and rebellion.',
    rentPrice: "₹99",
    buyPrice: "₹299",
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    image: 'https://covers.openlibrary.org/b/id/8775306-L.jpg',
    description: 'A dystopian view of a futuristic society.',
    rentPrice: "₹99",
    buyPrice: "₹299",
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    image: 'https://covers.openlibrary.org/b/id/8235116-L.jpg',
    description: 'A sailor’s story of obsession and revenge.',
    rentPrice: "₹99",
    buyPrice: "₹299",
  },
];

function Home() {
  return (
    <div className="home">
    <h1>Available Books</h1>
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.title}
          author={book.author}
          description={book.description}
          image={book.image}
          rentPrice={book.rentPrice}
          buyPrice={book.buyPrice}
        />
      ))}
    </div>
  </div>
  );
}

export default Home;
