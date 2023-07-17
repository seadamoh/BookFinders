import React, { useState } from 'react';
import "./add-book.styles.scss"

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [edition, setEdition] = useState('');
  const [submittedBook, setSubmittedBook] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log('Book submitted:', title, author, description, edition);
    // Update the submitted book state
    setSubmittedBook({ title, author, description, edition });
    // Reset form fields
    setTitle('');
    setAuthor('');
    setDescription('');
    setEdition('');
  };

  return (
    <div className="add-book-container">
      <h2>ADD Book</h2>
      <h3>Please add your favourite book</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="edition">Edition:</label>
          <input
            type="text"
            id="edition"
            value={edition}
            onChange={(e) => setEdition(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedBook && (
        <div className="success-message">
          <p>Book submitted successfully</p>
          <p>Title: {submittedBook.title}</p>
          <p>Author: {submittedBook.author}</p>
          <p>Description: {submittedBook.description}</p>
          <p>Edition: {submittedBook.edition}</p>
        </div>
      )}
    </div>
  );
};

export default AddBook;
