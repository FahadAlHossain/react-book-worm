import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {  bookId,image, bookName, author, tags, category, rating } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl border-2 border-black">
        <figure className="bg-blue-200 m-7 rounded-xl">
          <img className="h-72 p-5 " src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-start mb-3">
            <div className="badge badge-accent badge-outline">{tags[0]}</div>
            <div className="badge badge-accent badge-outline">{tags[1]}</div>
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>
          <div className="border-b border-dashed my-2"></div>
          <div className="flex justify-between">
            <span>{category}</span>
            <div className="rating">
              <span className="mr-2">{rating}</span>
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
