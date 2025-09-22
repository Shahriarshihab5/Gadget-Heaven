import React from 'react';

const Details = () => {
  return (
    <div>

      <section
        className=" -mx-12
          grid grid-cols-1
          items-center justify-center text-center
          py-8
          bg-[#9538E2]
          text-white
        "
      >
        <h1 className="text-3xl font-bold">Product Details</h1>
        <p className="max-w-2xl mx-auto mt-2">
          Explore the latest gadgets that will take your experience to the next level.
          From smart devices to the coolest accessories, we have it all!
        </p>
      </section>
    </div>
  );
};

export default Details;
