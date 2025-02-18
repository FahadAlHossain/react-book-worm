import React from "react";
import bannerImg from '../../assets/hero.png'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse mx-10">
        <img
          src={bannerImg}
          className="max-w-2xl rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-semibold">Books to freshen up your bookshelf</h1>
          <button className="btn btn-success text-white mt-4">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
