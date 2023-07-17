
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import Directory from '../directory/directory.component';
// //import FantasyBookImage from '../../images/Fantasy-Book.jpeg';
// import "./book-list.styles.scss";

// const BookList = () => {
//   const categories = [
//     {
//       id: 1,
//       title: 'Power',
//       // imageUrl: FantasyBookImage,
//       author: 'John Doe',
//       description: 'A gripping tale of power and adventure',
//       edition: 'First Edition'
//     },
//     // Add more category objects with their respective properties
//   ];

//   const handleEdit = (categoryId) => {
//     // Handle edit action for the category with the provided categoryId
//     console.log(`Editing category with id ${categoryId}`);
//   };

//   const handleDelete = (categoryId) => {
//     // Handle delete action for the category with the provided categoryId
//     console.log(`Deleting category with id ${categoryId}`);
//   };

//   const handleUpdate = (categoryId) => {
//     // Handle update action for the category with the provided categoryId
//     console.log(`Updating category with id ${categoryId}`);
//   };

//   return (
//     <div className="book-list">
//       <Outlet />
//       <Directory
//         categories={categories}
//         onEdit={handleEdit}
//         onDelete={handleDelete}
//         onUpdate={handleUpdate}
//       />
//     </div>
//   );
// };

// export default BookList;
