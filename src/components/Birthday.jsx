import React from 'react'

function Birthday({display, setDisplay, monthsLeft, daysLeft}) {
  return (
    <div className='flex flex-col mt-3'>
      <button
        onClick={() => {
          setDisplay(prev => !prev)
        }}
        className={`border border-primary-purple px-3 py-2 rounded hover:text-primary-purple w-1/2 self-center bg-primary-purple text-neutral-off-white hover:bg-neutral-off-white transition text-sm focus:ring-1 focus:ring-primary-purple lg:w-full`}
      >
        {display ? "Hide" : "Show"} Birthday
      </button>
      
      <p className={`${!display ? 'opacity-0' : 'opacity-100'} transition mt-3 text-sm text-center font-bold text-neutral-700`}>
        Your next birthday is<br />
        {!monthsLeft || monthsLeft == 12 ? '' : `in ${monthsLeft} month${monthsLeft == 1 ? '' : 's'}`}{
          !monthsLeft ? '' : `${monthsLeft !== 0 && daysLeft != 0 ? ' and ' : '.'}`}{ 
            monthsLeft === 0 && daysLeft !== 0 ? ' in ' : '' }{
          !daysLeft ? '' : `${daysLeft} day${daysLeft == 1 ? '' : 's'}.`}
      </p>
    </div>
  );
}

export default Birthday;