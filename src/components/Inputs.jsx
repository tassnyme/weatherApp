import React, { useState } from 'react'; // Correction: import de useState
import { BiSearch, BiCurrentLocation } from 'react-icons/bi';

function Inputs({ setQuery , hover}) {
  const [city, setCity] = useState(""); // Correction: useState au lieu de useStaet

  const getValue = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      setQuery({ q: city });
    }
  };

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
        <input 
          type="text" 
          placeholder='search by city...' 
          onChange={getValue}
          onKeyDown={handleSearch} // Correction: onKeyDown déclenche handleSearch
          className=  ' bg-blue-700 text-white text-xl font-light p-2 w-full shadow-xl capitalize focus:outline-none placeholder-white placeholder:lowercase rounded-lg' 
        />
        <BiSearch size={30} className={hover} />
        <BiCurrentLocation size={30} className={hover} />
      </div>

      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button className='text-2xl font-medium transition ease-out hover:scale-125'>°C</button> {/* Correction: hover */}
        <p className='text-2xl font-medium mx-1'>|</p>
        <button className='text-2xl font-medium transition ease-out hover:scale-125'>°F</button> {/* Correction: hover */}
      </div>
    </div>
  );
}

export default Inputs;
