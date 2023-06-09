import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRequestPopular } from '../actions/Dataactions'
import Latestmovies from '../components/Latestmovies'
import Tvshowslider from '../components/Tvshowslider'

const Home = () => {
  const dispatch = useDispatch()
  const requestPopular = useSelector(state => state.Data.request1)
  useEffect(() => {
    dispatch(fetchRequestPopular())
  }, [dispatch])

  const { data,loading } = requestPopular
  return (
    <>
    {
      loading ? 
      <>
      <div className='w-full h-screen animate-shimmer bg-white'>
      <div className='absolute lg:top-[30%] md:top-[20%] sm:top-[30%] p-8'>
              <div>
               <div className='w-[400px] h-12 bg-gray-50 rounded-lg '></div>
               <div className='flex items-center gap-2 mt-2'>
               <div className='w-32 h-12 bg-gray-50 rounded-lg '></div>
               <div className='w-32 h-12 bg-gray-50 rounded-lg '></div>
               </div>
               <div className='lg:w-[800px] md:w-[600px] sm:w-[300px] h-8 my-2 bg-gray-50 rounded-lg '></div>
               <div className='lg:w-[800px] md:w-[600px] sm:w-[300px] h-8 bg-gray-50 rounded-lg '></div>
              </div>
            </div>
      </div>
      </>
      :
      <>
      {data.results && data.results.slice(8,9).map((items)=>{
        return(
          <div key={items.id} className='w-full h-screen'>
            <div className='w-full h-screen'>
              <div className='w-full absolute h-screen bg-gradient-to-r from-black'></div>
            <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${items.backdrop_path}`} alt="" />
            <div className='absolute lg:top-[30%] md:top-[20%] sm:top-[30%] p-8'>
              <div>
                <p className='font-light lg:text-6xl md:text-4xl sm:text-2xl'>{items.title}</p>
              <button className='bg-transparent font-light bg-white border text-black my-2 py-2 select-none mr-3 px-4 text-xsm '>Play Now</button>
              <button className='bg-transparent font-light border-white border text-white my-2 py-2 select-none px-4 text-xsm '>Watch Now</button>
              <p className='font-light text-xsm'>Realease Date {items.release_date}</p>
              <p className='font-light text-xsm lg:w-[70%] md:w-[50%] sm:w-[85%] leading-5 text-lg'>
              {items.overview.length > 50 ? items.overview.slice(0,200) + '...' : items.overview}</p>
              </div>
            </div>
            </div>
          </div>
        )
      })} 
      </>
    }
    <Tvshowslider />
    </>
  )
}

export default Home
