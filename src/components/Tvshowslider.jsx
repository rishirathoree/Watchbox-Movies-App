import React, { useEffect, useRef } from "react";
import { useDispatch,useSelector } from "react-redux";
import { fetchTvShows } from "../actions/Dataactions";
const Tvshowslider = () => {
    const dispatch = useDispatch()
  const Tvshow = useSelector((state) => state.Data.request2);
  useEffect(() => {
    dispatch(fetchTvShows());
  }, [dispatch]);
  const { data, loading } = Tvshow;
  const sliderContaineref = useRef(null)
  const handleNext = () => {
    const width = sliderContaineref.current.clientWidth
    // if you wanna scroll a you can divide the value of width as per you preference
    // const width = sliderContaineref.current.clientWidth / 2;
    sliderContaineref.current.scrollLeft = sliderContaineref.current.scrollLeft - width 
  }
  const handlePrev = () => {

    const width = sliderContaineref.current.clientWidth
    // if you wanna scroll a you can divide the value of width as per you preference
    // const width = sliderContaineref.current.clientWidth / 2;
    sliderContaineref.current.scrollLeft = sliderContaineref.current.scrollLeft + width
  }
  return (
    <>
      
    
        <div className="p-4 relative w-full h-full">
        <p className="font-bold text-sm">Tv Shows</p>
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
         <div className="p-4">
         <button onClick={handleNext} className="absolute z-50 left-6 top-36"><i className="bx p-2 rounded-full bg-gray-50 bg-opacity-40 bx-chevron-left"></i></button>
            <button onClick={handlePrev} className="absolute z-50 right-6 top-36"><i className="bx p-2 rounded-full bg-gray-50 bg-opacity-40 bx-chevron-right"></i></button>
    <div ref={sliderContaineref} className="product-container flex overflow-x-hidden gap-4">
      {
        data.results && data.results.map((items)=>{
          return(
            <div key={items.id} className="min-w-[300px] h-[200px] bg-slate-200 overflow-hidden rounded-lg text-black">
          <img className="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`} alt="" />
      </div>
          )
        })
      }
      </div>
    </div>
          </>
        )}
      </div>
    </>
  );
};

export default Tvshowslider;