import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import { useContext } from "react";
import MusicContext from "../context/MusicContext";

const Navbar = () => {
  const { setSearchedSongs } = useContext(MusicContext);

  const searchSongs = async (e) => {
    const value = e.target.value.trim();
    if (value.length === 0) {
      setSearchedSongs([]);
      return;
    }
    const res = await axios.get(
      `https://jio-savan-api-sigma.vercel.app/search/songs?query=${value}&page=1&limit=10`
    );
    const { data } = res.data;
    if (!data.results || data.results.length === 0) {
      setSearchedSongs([]);
    } else {
      setSearchedSongs(data.results);
    }
    console.log(data.results);
  };

  return (
    <nav className="flex flex-col gap-2 lg:flex-row justify-between items-center py-3 border-none lg:border px-2 fixed top-0 left-0 right-0 bg-[#f5f5f5ff] z-20">
      {/* 1st div */}
      <div className="flex flex-col sm:flex-row justify-between items-center w-full lg:w-auto">
        <div className="flex justify-between items-center gap-2 mr-0 sm:mr-4">
          <img src="/savan-logo.png" alt="logo" width={37} />
          <Link to="/" className="font-extrabold text-lg">
            Audiona
          </Link>
        </div>
        <div className="flex text-[18px] sm:text-[24px] lg:text-[15px] gap-3 sm:gap-5 text-gray-600 font-semibold h-full mt-2 sm:mt-0">
          <li className="list-none">Music</li>
          <li className="list-none">Podcasts</li>
          <li className="list-none">Go Pro</li>
        </div>
      </div>

      {/* 2nd div */}
      <div className="w-full sm:w-auto max-w-full sm:max-w-xs mx-0 sm:mx-2 lg:max-w-none lg:w-auto mt-2 sm:mt-0">
        <input
          type="text"
          name="search"
          id="search"
          className="py-2 rounded-full w-full lg:w-[40vw] outline-none text-center border text-black"
          placeholder="Search for songs"
          autoComplete="off"
          autoCorrect="off"
          onChange={searchSongs}
        />
      </div>
      {/* 3rd div */}
      <div className="hidden lg:flex justify-between items-center gap-4">
        <div className="flex justify-center gap-2">
          <div className="flex flex-col text-sm">
            <span className="text-[14px] text-gray-600 font-semibold">
              Music Languages
            </span>
            <span className="text-[12px] text-gray-500">Hindi</span>
          </div>
          <MdKeyboardArrowDown className="text-xl text-gray-500 mt-2" />
        </div>
        <div className="flex text-[15px] gap-5 text-gray-600 font-semibold">
          <li className="list-none">Log In</li>
          <li className="list-none">Sign Up</li>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
