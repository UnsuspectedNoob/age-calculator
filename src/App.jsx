import React, { useState } from 'react'
import DateInput from './components/DateInput';
import { icon } from './assets/images'

function App() {
  const [day, setDay] = useState('01');
  const [month, setMonth] = useState('01');
  const [year, setYear] = useState('1918');

  return (
    <div className='font-poppins bg-white py-10 rounded-xl border-e-blue-100 px-6 max-w-3xl'>

      <div className='flex gap-x-3 mb-14'>
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

      <div className='relative border-t border-neutral-l-grey'>
        <button className='flex justify-center items-center bg-primary-purple w-12 h-12 rounded-full p-3 mx-auto -mt-6'>
          <img src={icon} alt="icon" />
        </button>
      </div>


    </div>
  );
}

export default App;