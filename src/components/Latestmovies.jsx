import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchRequestPopular } from "../actions/Dataactions";
const Latestmovies = () => {
    const dispatch = useDispatch()
  const requestPopular = useSelector((state) => state.Data.request1);
  useEffect(() => {
    dispatch(fetchRequestPopular());
  }, [dispatch]);
  const { data, loading } = requestPopular;
  return (
    <>
      <div className="p-8 w-full h-full">
        <p className="font-bold text-sm">Latest Movies</p>
        {loading ? (
          <>
            <div className="grid grid-cols-4 gap-4">
              <div className="w-full h-[200px] animate-pulse rounded-md bg-gray-800"></div>
              <div className="w-full h-[200px] animate-pulse rounded-md bg-gray-800"></div>
              <div className="w-full h-[200px] animate-pulse rounded-md bg-gray-800"></div>
              <div className="w-full h-[200px] animate-pulse rounded-md bg-gray-800"></div>
            </div>
          </>
        ) : (
          <>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
              {data.results &&
                data.results.slice(0,4).map((items) => {
                  return (
                    <div key={items.id} className="w-full h-full rounded-md overflow-hidden hover:scale-105 duration-500">
                      <img
                        className="w-full h-full object-cover"
                        src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`}
                        alt=""
                      />
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Latestmovies;
