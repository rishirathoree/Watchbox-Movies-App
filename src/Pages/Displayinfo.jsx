import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchTvShows } from '../actions/Dataactions';
import Tvshowslider from '../components/Tvshowslider';

const Displayinfo = () => {
  const { id } = useParams();
  const Data = useSelector((state) => state.Data.request2);
  const result = useSelector((state) => state.Data.request2.data.results);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTvShows());
  }, [dispatch]);
  const selectedMovie = result && result.find((item) => item.id === parseInt(id));
  const {loading} = Data
  console.log(result[0]);
  return (
    <>
    <div>
      {loading ?
      <>
      <div className='w-full h-[500px] animate-pulse bg-slate-500'>
      </div>
      </>
      :
      <>
     {
      selectedMovie && <div key={selectedMovie.id} className='w-full h-[550px]'>
      <div className='w-full h-[550px]'>
        <div className='w-full absolute h-[550px] bg-gradient-to-t from-black'></div>
      <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path}`} alt="" />
      {/* <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`} alt="" /> */}
      <div className='absolute lg:top-[30%] md:top-[20%] sm:top-[30%] p-8'>
        <div>
          <p className='font-light lg:text-6xl md:text-4xl sm:text-2xl'>{selectedMovie.original_title}</p>
        <button className='bg-transparent font-light bg-white border text-black my-2 py-2 select-none mr-3 px-4 text-xsm '>Play Now</button>
        <button className='bg-transparent font-light border-white border text-white my-2 py-2 select-none px-4 text-xsm '>Watch Now</button>
        <p className='font-light text-xsm'>Realease Date {selectedMovie.release_date}</p>
        <p className='font-light text-xsm lg:w-[70%] md:w-[50%] sm:w-[85%] leading-5 text-lg'>
        {selectedMovie.overview.length > 50 ? selectedMovie.overview.slice(0,200) + '...' : selectedMovie.overview}</p>
        </div>
      </div>
      </div>
    </div>
}
      </>   
    }
    </div>
    <Tvshowslider />
    </>
  )
}

export default Displayinfo
