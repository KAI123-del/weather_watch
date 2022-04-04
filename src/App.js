import React, { useState, useEffect } from 'react';
import './index.css';
import Footer from './Components/Footer.js';
import MainBackthree from './Images/mainBack4.jpg';
import MainBacknine from './Images/mainBack10.jpg';



function App() {
  const [city, setCity] = useState('Search a city');
  const [weather, setWeather] = useState(null);


  const ChangeHandler = (event) => {
    setCity(event.target.value)

  }
  useEffect(() => {
    async function weatherFetch() {
      try {

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e7eba07d9be19155809b43796844c0ee`);
        const data = await response.json();
        const weArr = data.weather;
        const weObj = data.main;
        const weCity = data.name;
        const weSys = data.sys;

        // convert the sunset into proper formet 
        let unix_timestamp = weSys.sunset;
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var formattedSet = hours + ':' + minutes;

        // convert the sunrise into proper format
        let unix_timestamp1 = weSys.sunrise;
        var date1 = new Date(unix_timestamp1 * 1000);
        var hours1 = date1.getHours();
        var minutes1 = "0" + date1.getMinutes();
        var formattedRise = hours1 + ':' + minutes1;

        weArr.push(weObj);
        weArr.push(weCity)
        weArr.push(formattedSet);
        weArr.push(formattedRise)
        weArr.push(weSys)




        setWeather(weArr);
        console.log(weArr)


      } catch (error) {
        console.log(error);
      }

    };
    weatherFetch()




  }, [city])






  const submitHandler = (event) => {
    event.preventDefault()
    setCity('')


  }







  return (



    <React.Fragment>
      <img src={MainBackthree} className="absolute hidden lg:inline top-0 min-h-screen     " />
      <img src={MainBacknine} className="absolute  lg:hidden top-0  " />


      <div className='relative '>
        <div className='flex justify-center items-center mt-24 lg:mt-24 '>
          <div className='lg:text-8xl text-5xl font-gotham  lg:bg-gradient-to-r lg:from-lime-400 lg:to-teal-400 lg:via-emerald-400  lg:bg-clip-text text-white lg:text-transparent tracking-wide '><h1 className=''>Weather Fetch</h1></div>
        </div>
        <form onSubmit={submitHandler}>
          <div className='flex items-center justify-center mt-8 lg:mt-3 '>
            <input onChange={ChangeHandler} value={city} className='border-b-4 border-teal-400 lg:border-lime-500 rounded-full lg:w-3/5 h-12 w-4/5 shadow-xl  outline-none text-center text-lg lg:text-emerald-400 text-lime-400  tracking-widest' />
          </div>

        </form>
        {!weather ? (<div className='px-8'><div className='flex relative justify-center items-center lg:mt-24 mt-48 text-white'>
          <div className='lg:w-3/5 lg:h-20 w-full h-20 rounded-xl opacity-30 bg-black absolute'></div>
          <p className='tracking-wide lg:text-xl lg:font-normal font-semibold px-4 lg:px-0 lg:text-white relative  '>Oops!!! No data found for the entered city. Try with a different city name.</p></div><div className='mt-80 '><Footer /></div></div> ) : <div>
          <div className=' flex  justify-center items-center bg-transparent mt-16 lg:mt-0 lg:pt-24 '>
            
            <div className='relative  lg:bg-transparent shadow-lime-400 lg:shadow-gray-400 shadow-lg rounded-xl pt-4 pb-4  text-white  lg:w-2/5 text-lg  lg:text-2xl lg:gap-y-20 lg:gap-x-10 lg:px-8 px-4 '>

              <div className='w-full mb-3 flex space-x-8 lg:space-x-8  p-1   justify-center items-center '><div className=''><span className='font-semibold'>City :</span> <span className='font-gotham'>{weather[2]}</span></div><div className=''> <span className='font-semibold'>Country :</span><span className='ml-2 font-gotham'>{weather[5].country}</span></div></div>
              <div className='flex mb-4 space-x-20  p-1 justify-center items-center'>
                <div><span className='font-semibold'>Sunrise :</span> <span className='font-gotham'>{weather[4]}</span></div>
                <div><span className='font-semibold' >Sunset :</span><span className='ml-2 font-gotham'>{weather[3]}</span></div>
              </div>
              <div className='relative flex  items-center  p-1 justify-center space-x-8 mb-4  '><div>
                <div className='w-28 h-24 absolute top-0 rounded-xl bg-white  lg:bg-gray-600 opacity-25'></div>
                <img className=' relative rounded-xl w-28 h-24' src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
              </div>
                <div><span className='font-semibold' >weather : </span><span className='font-gotham'>{weather[0].main}</span></div>
              </div>
              <div className='flex mb-4  space-x-20  p-1 justify-center items-center'>
              <div className=''><span className='font-semibold'>pressure : </span><span className='font-gotham'>{weather[1].pressure}  hpa</span></div>
              <div className=''><span className='font-semibold'>humidity :</span><span className='ml-2 font-gotham'>{weather[1].humidity}  g/Kg</span></div>
              </div>
              <div className='flex mb-4  justify-center  p-1 items-center'>
              <div className='font-gotham'>{weather[1].temp} Celsius</div>
              </div>
              
                <div className='flex justify-center items-center   p-1 mb-4'><span className='font-semibold mr-3'>max temp:  </span> <span className='font-gotham'> {weather[1].temp_max}  Celsius</span></div>
                <div className='flex justify-center items-center '><span className='font-semibold mr-3'>min temp : </span><span className='font-gotham'>{weather[1].temp_min}  Celsius</span></div>
              


            </div></div>
            <div className='lg:bg-black px-8 lg:px-0  lg:border-t mt-16 lg:mt-10'>
            <Footer/>
            </div>

        </div>
        }
        
        
       
      </div>

    </React.Fragment>





  );
}

export default App;
