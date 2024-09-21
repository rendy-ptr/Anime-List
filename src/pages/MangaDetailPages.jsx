import React from "react";
import useFetchDetailManga from "../utils/fetchDetailManga";
import { HashLoader } from "react-spinners";

const MangaDetailPages = () => {
  const { data, error, isLoading } = useFetchDetailManga();

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <HashLoader color="#2d52b6" size={100} />
      </div>
    );

  if (error) return <div>Error: {error}</div>;

  if (!data || data.length === 0) return <div>No anime data available</div>;
  return (
    <div className="container mx-auto my-6">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img
            src={data.images.webp.image_url}
            alt={data.title}
            className="rounded-xl shadow-xl object-cover max-h-[500px]"
          />
        </div>

        <div className="w-full md:w-2/3 md:pl-6">
          <h1 className="text-center lg:text-3xl text-xl border-b-4 pb-4">
            {data.title}
          </h1>

          <div className="grid grid-cols-3 gap-2 pt-4">
            <p>Source: {data.source}</p>
            <p>Episodes: {data.episodes}</p>
            <p>Status: {data.status}</p>
            <p>Duration: {data.duration}</p>
            <p>Rating: {data.rating}</p>
            <p>Score: {data.score}</p>
            <p>Rank: {data.rank}</p>
            <p>Popularity: {data.popularity}</p>
            <p>Favorites: {data.favorites}</p>
            <p>Year: {data.year}</p>
            <p>Season: {data.season}</p>
            {data.demographics[0]?.name && (
              <p>Demographics: {data.demographics[0].name}</p>
            )}
            <p>External : {data.external[0].name}</p>
            {data.relations[1]?.entry[0]?.name && (
              <p>Relations: {data.relations[1].entry[0].name}</p>
            )}
          </div>
        </div>
      </div>

      <div className="w-full mt-6">
        <h2 className="text-2xl font-semibold mb-4">Synopsis</h2>
        <p className="text-justify">{data.synopsis}</p>
      </div>
    </div>
  );
};

export default MangaDetailPages;
