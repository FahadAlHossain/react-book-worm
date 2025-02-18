import { BiCalendar } from "react-icons/bi";
import { LuUsers } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";

const ReadList = ({ book }) => {
  const {
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
    <div className="card card-side bg-base-100 shadow-xl border-2 border-black my-5">
      <figure className="bg-blue-200 p-2">
        <img src={image} className="h-72" alt="Movie" />
      </figure>
      <div className="card-body">
        <h1 className="card-title text-3xl">{bookName}</h1>
        <p>By : {author}</p>
        <div className="flex justify-start gap-4 items-center my-3">
          <span className="font-bold">Tag</span>
          <div className="badge badge-accent badge-outline">{tags[0]}</div>
          <div className="badge badge-accent badge-outline">{tags[1]}</div>
          <p className="flex items-center gap-1">
            <BiCalendar />
            Year of Publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex justify-start gap-4 ">
          <div className="flex items-center gap-1">
            <LuUsers /> Publisher: {publisher}
          </div>
          <div className="flex items-center gap-1">
            <RiPagesLine />
            Page: {totalPages}
          </div>
        </div>
        <div className="border-b my-3"></div>
        <div className="flex justify-start gap-4 items-center my-3">
          <div className="badge badge-warning badge-outline">
            Category : {category}
          </div>
          <div className="badge badge-error badge-outline">
            Rating : {rating}
          </div>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-info">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
