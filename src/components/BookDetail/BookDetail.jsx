import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const loadData = useLoaderData();
  const books = loadData.find((book) => book.bookId === parseInt(bookId));
  const {
    image,
    review,
    totalPages,
    author,
    bookName,
    publisher,
    category,
    tags,
    yearOfPublishing,
    rating,
  } = books;
  const handleRead = (id) => {
    addToStoredReadList(id)
  }
  const handleWishList = (id) => {
    addToStoredWishList(id);
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <figure className="bg-blue-200 p-8 rounded-xl max-w-sm">
        <img src={image} className="lg:max-w-80 rounded-lg shadow-2xl" />
        </figure>
        <div>
          <h1 className="text-4xl font-bold">{bookName}</h1>
          <p className="py-4 text-sm">By : {author}</p>
          <div className="border-b"></div>
          <p className="py-4">{category}</p>
          <div className="border-b mb-4"></div>
          <p>
            <span className="font-bold text-sm">Review : </span>
            {review}
          </p>
          <div className="flex justify-start gap-4 items-center my-4">
            <span className="font-bold">Tag</span>
            <div className="badge badge-accent badge-outline">{tags[0]}</div>
            <div className="badge badge-accent badge-outline">{tags[1]}</div>
          </div>
          <div className="border-b mb-4"></div>
          <table className="mb-5">
            <tbody>
              <tr>
                <td className="pr-9 font-bold">Number of Pages:</td>
                <td>{totalPages}</td>
              </tr>
              <tr>
                <td className="font-bold">Publisher:</td>
                <td>{publisher}</td>
              </tr>
              <tr>
                <td className="font-bold">Year of Publishing:</td>
                <td>{yearOfPublishing}</td>
              </tr>
              <tr>
                <td className="font-bold">Rating:</td>
                <td>{rating}</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-outline text-white mr-4" onClick={() => handleRead(bookId)}>Read</button>
          <button className="btn btn-info" onClick={()=>handleWishList(bookId)}>WishList</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
