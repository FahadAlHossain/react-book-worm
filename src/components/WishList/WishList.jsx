import { BiCalendar } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const WishList = ({ book }) => {
  const {
    bookId,
    image,
    totalPages,
    author,
    bookName,
    publisher,
    category,
    tags,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border-2 border-black my-5">
      <figure className="bg-blue-200 p-2 lg:max-w-52">
        <img src={image} className="lg:max-w-52 max-w-56" alt="Movie" />
      </figure>
      <div className="card-body">
        <h1 className="card-title text-3xl">{bookName}</h1>
        <p>By : {author}</p>
        <div className="grid lg:flex grid-cols-1 justify-start gap-4 items-center my-3">
          <span className="font-bold">Tag</span>
          <div className="badge badge-accent badge-outline">{tags[0]}</div>
          <div className="badge badge-accent badge-outline">{tags[1]}</div>
          <p className="flex items-center gap-1">
            <BiCalendar />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="grid lg:flex grid-cols-1 justify-start gap-4 ">
          <div className="flex items-center gap-1">
            <LuUsers /> Publisher: {publisher}
          </div>
          <div className="flex items-center gap-1">
            <RiPagesLine />
            Page: {totalPages}
          </div>
        </div>
        <div className="border-b my-3"></div>
        <div className="grid lg:flex grid-cols-2 justify-start gap-4 items-center my-3">
          <div className="badge badge-warning badge-outline">
            Category : {category}
          </div>
          <div className="badge badge-error badge-outline">
            Rating : {rating}
          </div>
        </div>
        <div className="flex lg:justify-end justify-center">
        <Link to={`/books/${bookId}`} className="btn btn-info">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default WishList;
