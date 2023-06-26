import React, { useEffect } from 'react'

function DateInput({name, id, state, setState}) {
  useEffect(() => {
    document.getElementById(`${id}`).value = state
  }, [])
  
  return (
    <div className='w-1/3'>
      <label
        htmlFor={`${id}`}
        className='block uppercase tracking-[3px] text-xs font-bold text-neutral-smokey-gray mb-1'
      >
        {name}
      </label>

      <input
        id={`${id}`}
        type="number"
        className='w-full border border-neutral-l-grey p-3 rounded-md text-neutral-off-black text-xl uppercase font-extrabold outline-none focus:border-primary-purple transition'
        onChange={() => {
          let value = document.getElementById(`${id}`).value
          console.log(value)
          setState(value)
        }}
        placeholder={`${id[0]}${id[0]}`.toUpperCase()}
      />
    </div>
  );
}

export default DateInput;