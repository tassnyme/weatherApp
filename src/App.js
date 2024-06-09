import TopButtons from "./components/TopButtons";
import React, { useEffect, useState } from 'react';
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./weatherService";

function App() {
  const hover ='cursor-pointer transition ease-out hover:scale-125'
  const [query, setQuery] = useState({ q: 'Tunisia' }); // Fixed useState initialization
  const [units, setUnits] = useState('metric');
  const [weather, setWeather] = useState(null);


  const getWeather = async () => {
    await getFormattedWeatherData({ ...query, units }).then(data => {
      setWeather(data);
    });
    console.log(weather); // Fixed to log the correct variable
  };

  useEffect(() => { getWeather(); }, [query, units]); // Ensure proper dependencies
  
  
  return (
    <div className="mx-auto w-screen mt-4 py-5 px-16 shadow-xl shadow-gray-400 bg-purplee h-100 bg-gradient-to-r from-purplee via-blue-700  "> {/* Fixed class name */}
      
      <TopButtons setQuery={setQuery} hover={hover}/>
      <Inputs setQuery={setQuery} hover={hover} />
      
      {weather &&
        <div className="grid grid-cols-2 grid-rows-3 gap-4 ">
          <TimeAndLocation weather={weather} hover={hover} />
          <TempAndDetails weather={weather} hover={hover}/>
          <Forecast hover={hover} title='3 hour step forecast' data={weather.hourly } className=" flex flex-col " cls="flex flex-row"/>
          <Forecast  hover={hover} title= "daily forecast" data={weather.daily} className=" flex flex-row " cls="flex flex-col" />
        </div>
      }
    </div>
    
  );
}

export default App;
