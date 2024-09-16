import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { removeuser } from "../store/userSlice";
import { useDispatch } from "react-redux";
function Navbar() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(removeuser());
  }

  return (
    <div className="border shadow-xl w-full p-1">
      <nav className="flex py-3 justify-between  mx-auto items-center container">
        <Link to={"/"}>
          {" "}
          <h1 className="cursor-pointer text-[30px] px-4 font-extrabold hover:scale-110 transform transition-transform duration-300">
            Crypto<span className="text-green-500">Tracker</span>
          </h1>
        </Link>
        {user === "logged in" && (
          <navItem className=" flex gap-4 font-semibold text-[20px] ">
            <Link to={"/top10"}>
              {" "}
              <p className="cursor-pointer hover:text-green-500 hover:scale-110 transform transition-transform duration-300">Top 10</p>
            </Link>
            <Link to={"/trending"}>
              {" "}
              <p className="cursor-pointer  hover:text-green-500 hover:scale-110 transform transition-transform duration-300">Trending</p>
            </Link>
            <Link to={"/watchlist"}>
              {" "}
              <p className="cursor-pointer hover:text-green-500 hover:scale-110 transform transition-transform duration-300">Watchlist</p>
            </Link>
          </navItem>
        )}
        <div className="flex gap-4 px-2">
          {user === "logged in" ? (
            <button
              onClick={handleLogout}
              className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg"
            >
              Log out
            </button>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="bg-green-500 hover:bg-green-700  text-white px-4 py-2 rounded-lg shadow-lg">
                  Log In
                </button>
              </Link>
              <Link to={"/signin"}>
                <button className="bg-green-500 hover:bg-green-700  text-white px-4 py-2 rounded-lg shadow-lg">
                  Sign In
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


