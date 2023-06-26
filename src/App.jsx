import React, { useState } from 'react';
import DateInput from './components/DateInput';
import { icon } from './assets/images';
import { age } from "./age"

function App() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  return (
    <div
      className='font-poppins bg-white py-10 rounded-xl border-e-blue-100 px-6 max-w-3xl rounded-br-[96px]'>

      <div>

        <div className='flex gap-x-3 mb-16'>
          <DateInput
            id={'day'}
            name={'day'}
            state={day}
            setState={setDay}
          />

          <DateInput
            id={'month'}
            name={'month'}
            state={month}
            setState={setMonth}
          />

          <DateInput
            id={'year'}
            name={'year'}
            state={year}
            setState={setYear}
          />
        </div>

        <div className='flex justify-center border-t border-neutral-l-grey'>
          <button 
            type='submit'
            className='flex justify-center items-center bg-primary-purple w-16 h-16 rounded-full p-4 -mt-8'>
            <img src={icon} alt="icon" />
          </button>
        </div>
      </div>

      <div className='my-6 text-neutral-off-black'>
        <p className='text-6xl whitespace-nowrap font-extrabold italic'>
          <span className='text-primary-purple'>38</span> years
        </p>
        <p className='text-6xl whitespace-nowrap font-extrabold italic'>
          <span className='text-primary-purple'>3</span> months
        </p>
        <p className='text-6xl whitespace-nowrap font-extrabold italic'>
          <span className='text-primary-purple'>26</span> days
        </p>
      </div>


    </div>
  );
}

export default App;