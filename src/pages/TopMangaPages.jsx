import useFetchTopManga from "../utils/fetchTopManga";
import Card from "../components/Card/Card.JSX";
import Pagination from "../components/Pagination/Pagination";
import { useState } from "react";
import { HashLoader } from "react-spinners";

const TopMangaPages = () => {
  const { data, error, isLoading } = useFetchTopManga(
    `${import.meta.env.VITE_API_URL}/top/manga`
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  if (isLoading) return (
    <div className="flex justify-center items-center min-h-screen">
      <HashLoader color="#2d52b6" size={100} />
    </div>
  );
  if (error) return <div>Error: {error}</div>;
  if (!data || data.length === 0) return <div>No manga data available</div>;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => { 
    setCurrentPage(pageNumber);
  }

  return (
    <div className="container mx-auto px-4">
      <Card
        header="List Top Manga"
        data={currentItems}
        renderCard={(item) => (
          <>
            <div className="relative pt-[140%]">
              <img
                src={item.images.webp.image_url}
                alt={item.title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex-grow">
              <h2 className="font-bold text-lg mb-2 line-clamp-2 truncate">
                {item.title}
              </h2>
              <p className="text-sm mb-4 line-clamp-3">{item.synopsis}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold">
                  Score: {item.score}
                </span>
                <div className="badge badge-primary">{item.genres[0].name}</div>
              </div>
            </div>
          </>
        )}
      />
      <Pagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}/>
    </div>
  );
};

export default TopMangaPages;
