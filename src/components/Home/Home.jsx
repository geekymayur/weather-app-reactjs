import {React , useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import Datacard from '../Datacard/Datacard'
import getWeather from '../../hooks/Weather'
const Home = () => {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('Delhi');


   function handleCityname() {
    let res =  getWeather(city);
    setWeather(res);
    console.log(res)
  }

  // use Effect
  useEffect(() => {
    handleCityname();
  },[])
  
  

  return (
    <>
      <div className='bg-gray-950 p-3 min-h-lvh'>
        {/* Search Box */}
        <div className='p-3 rounded-md'>

          <form onSubmit={(e) => { e.preventDefault(); handleCityname() }}>
            <input onChange={(e)=>setCity(e.target.value)} className='p-2 rounded-lg min-w-[70%] outline-none border-none' type="text" placeholder='City Name'  />
            <button type='submit' className='text-white p-2 rounded-xl mx-3'>Search</button>
          </form>
        </div>

        {/* Result */}

        <div className='my-[50px]'>
          <h3 className='text-3xl text-white text-center font-bold'>{weather.name}</h3>
          <p className='text-center text-white mt-2'>Chance of rain : 80%</p>

          {/* <img className='w-[200px] m-auto' src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" /> */}
          <h3 className='text-white text-center text-6xl font-bold'> °</h3>
        </div>

        {/* additionala information */}

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
          <Datacard name={'UV INDEX'} value={'3'} />
          <Datacard name={'WIND'} value={'0.2 km/h'} />
          <Datacard name={'HUMIDITY'} value={'80%'} />
          <Datacard name={'visibility'} value={'12 km'} />
        </div>





        {/* Back arrow */}
        <Link to="/">
          <div className='w-10 bg-red-800 h-10 rounded-lg p-2 fixed bottom-5 left-5'>
            <svg xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Home