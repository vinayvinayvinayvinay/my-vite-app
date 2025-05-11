import React, { useState } from 'react';
import './Books.css';
import './PageWrapper.css'; // fixed path if PageWrapper.css is in src/

function Books() {
  const [books, setBooks] = useState([]);
  const [selectedAction, setSelectedAction] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    image: null,
    sellPrice: '',
    lendPrice: ''
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleActionSelect = (action) => {
    setSelectedAction(action);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === 'image/jpeg') {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, image: imageUrl });
      setImagePreview(imageUrl);
    } else {
      alert("Please upload a JPG image.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = { ...formData, action: selectedAction };
    setBooks([...books, newBook]);
    setFormData({
      title: '',
      author: '',
      description: '',
      image: null,
      sellPrice: '',
      lendPrice: ''
    });
    setImagePreview(null);
    setSelectedAction('');
  };

  return (
    <div className="page-wrapper">

        <div className="books-page">
        <h2 style={{ color: '#333', fontSize: '28px' }}>Add a Book</h2>
          {!selectedAction ? (
            <div className="action-select">
              <button onClick={() => handleActionSelect('Sell')} className="sell-btn">Sell</button>
              <button onClick={() => handleActionSelect('Lend')} className="lend-btn">Lend</button>
            </div>
          ) : (
            <>
              <p>Selected: <strong>{selectedAction}</strong></p>

              <form className="book-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="title"
                  placeholder="Book Title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="author"
                  placeholder="Author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="description"
                  placeholder="Short Description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />

                {selectedAction === 'Sell' && (
                  <input
                    type="number"
                    name="sellPrice"
                    placeholder="Sell Price (₹)"
                    value={formData.sellPrice}
                    onChange={handleChange}
                    required
                  />
                )}

                {selectedAction === 'Lend' && (
                  <input
                    type="number"
                    name="lendPrice"
                    placeholder="Lend Price (₹)"
                    value={formData.lendPrice}
                    onChange={handleChange}
                    required
                  />
                )}

                <label>
                  Upload Image (JPG only):
                  <input
                    type="file"
                    accept=".jpg"
                    onChange={handleImageChange}
                    required
                  />
                </label>

                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    style={{ width: '150px', marginTop: '10px', borderRadius: '8px' }}
                  />
                )}

                <button type="submit">Add Book</button>
              </form>
            </>
          )}

          {/* Book List */}
          <div className="book-list">
            {books.map((book, index) => (
              <div key={index} className="book-card">
                {book.image && (
                  <img src={book.image} alt={book.title} />
                )}
                <h3>{book.title}</h3>
                <p><em>by {book.author}</em></p>
                <p>{book.description}</p>
                {book.action === 'Sell' && <p className="price-tag">Sell Price: ₹{book.sellPrice}</p>}
                {book.action === 'Lend' && <p className="price-tag">Lend Price: ₹{book.lendPrice}</p>}
                <button className={book.action === 'Sell' ? 'sell-btn' : 'lend-btn'}>
                  {book.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default Books;
