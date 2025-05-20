import { useContext } from "react";
import { X } from "react-feather";
import MusicContext from "../context/MusicContext";
import SongItem from "./SongItem";

const SearchSection = () => {
  const { searchedSongs, setSearchedSongs } = useContext(MusicContext);

  // Function to close the search section
  const closeSearchSelection = () => {
    setSearchedSongs([]);
  };

  return (
    <div
      className={`fixed left-0 right-0 bottom-0 top-0 flex flex-col justify-start items-center backdrop-filter bg-opacity-50 backdrop-blur-lg py-10 md:py-20 ${
        searchedSongs.length === 0 ? "-translate-y-full" : "translate-y-0"
      } transition-all duration-500 ease-linear overflow-y-auto`}
    >
      <div className="absolute top-4 right-4 md:top-6 md:right-6 mt-35">
        <button
          onClick={closeSearchSelection}
          className="p-2 rounded-full bg-white text-gray-700 hover:bg-gray-200"
        >
          <X size="24" />
        </button>
      </div>
      <div className="w-full max-w-4xl flex flex-col md:flex-row flex-wrap gap-4 p-4 my-30 md:my-20 justify-center items-center md:items-start">
        {searchedSongs.length > 0 ? (
          searchedSongs.map((song) => <SongItem key={song.id} {...song} />)
        ) : null}
      </div>
    </div>
  );
};

export default SearchSection;