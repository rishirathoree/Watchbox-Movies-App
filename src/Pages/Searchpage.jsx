import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTvShows } from '../actions/Dataactions';
import { Link } from 'react-router-dom'
const Searchpage = () => {
  const searchInputRef = useRef(null);
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState('');
  const [filteredMovie, setFilteredMovie] = useState([]);
  useEffect(() => {
    dispatch(fetchTvShows());
  }, [dispatch]);
  const data = useSelector((state) => state.Data.request2);
  const {loading} = data
  const handleSubmit = () => {
    const movie = data.data.results.filter((item) => item.original_title.toLowerCase().includes(movieName.toLowerCase())  || item.title.toLowerCase().includes(movieName.toLowerCase()));
    console.log(movie);
    if (movie.length > 0) {
      setFilteredMovie(movie);
    } else {
      setFilteredMovie();
    }
  };

  return (
    <>
      <div className={`w-full flex-col h-full my-20 flex items-center justify-center`}>
        <div className="my-12">
          <input
            onChange={(e) =>  setMovieName(e.target.value)}
            ref={searchInputRef}
            type="text"
            className="focus:outline-none text-xsm w-[300px] bg-transparent border-b border-white"
          />
          <i onClick={handleSubmit} className="bx bx-search"></i>
        </div>
        <div className="grid w-full lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 p-12 gap-4">
          {loading ? <div>
                <div className="w-full h-60 bg-gray-100 rounded-md animate-pulse">
                </div>
                <div className="w-2/3 h-3 mt-2 rounded-full bg-gray-100 animate-pulse"></div>
                <div className="w-1/2 h-3 mt-2 rounded-full bg-gray-100 animate-pulse"></div>
              </div> : 
              <>
              {filteredMovie && (
            filteredMovie.map((items) => (
              <Link key={items.id} to={`/movie/${items.id}`}>
                <div>
                <div className="w-full h-60 bg-gray-100 rounded-md">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
                    alt=""
                  />
                </div>
                <p className='text-xsm font-light mt-2 text-white'>{items.original_title}</p>
                <p className='text-xsm font-light mt-2 text-white'>{items.author}</p>
              </div>
                </Link>
            ))
          )}
              </> }
          
        </div>
      </div>
    </>
  );
};

export default Searchpage;
