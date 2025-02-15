import React from "react";

const Book = ({ book }) => {
  const { image, bookName, author } = book;
  return (
    <div className="card bg-base-100 w-96 shadow-xl border-2 border-black">
      <figure className="bg-blue-200 m-7 rounded-xl">
        <img className="h-72 p-5 "
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>By : {author}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-accent badge-outline bg-blue-100">Fashion</div>
          <div className="badge badge-accent badge-outline bg-blue-100">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
