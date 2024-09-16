import * as React from "react";

const Card = (props) => {
  const { header, data, renderCard } = props;
  return (
    <>
      <h1 className="text-2xl font-bold my-6 lg:text-2xl">{header}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 cursor-pointer">
        {data.map((item) => (
          <div
            key={item.mal_id}
            className="flex flex-col bg-base-100 rounded-md shadow-md overflow-hidden"
          >
            {renderCard(item)}
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
