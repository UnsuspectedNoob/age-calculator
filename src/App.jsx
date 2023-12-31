import { useState } from "react";
import DateInput from "./components/DateInput";
import { icon } from "./assets/images";
import { age } from "./age";
import Birthday from "./components/Birthday";

function App() {
  const [display, setDisplay] = useState(false);
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const [ageDays, setAgeDays] = useState(0);
  const [ageMonths, setAgeMonths] = useState(0);
  const [ageYears, setAgeYears] = useState(0);

  const [monthsLeft, setMonthsLeft] = useState(0);
  const [daysLeft, setDaysLeft] = useState(0);

  // Validate form function.
  function validForm() {
    return true;
  }

  function handleClick(event) {
    event.preventDefault();
    if (validForm()) {
      let { years, months, days, birthday } = age(day, month, year);
      setAgeDays(days);
      setAgeMonths(months);
      setAgeYears(years);
      setDaysLeft(birthday.days);
      setMonthsLeft(birthday.months);
      setDisplay(false);
    } else {
      return;
    }
  }

  return (
    <div className="font-poppins bg-white py-10 rounded-xl border-e-blue-100 px-6 max-w-3xl rounded-br-[96px]">
      <form action="#">
        <div className="flex gap-x-3 mb-16 ">
          <DateInput id={"day"} state={day} setState={setDay} />

          <DateInput id={"month"} state={month} setState={setMonth} />

          <DateInput id={"year"} state={year} setState={setYear} />
        </div>

        <div className="flex justify-center border-t border-neutral-l-grey lg:justify-end">
          <button
            onClick={handleClick}
            type="submit"
            className="transition duration-300 flex justify-center items-center bg-primary-purple w-16 h-16 rounded-full p-4 -mt-8 hover:bg-neutral-off-black lg:w-20 lg:h-20"
          >
            <img src={icon} alt="icon" />
          </button>
        </div>
      </form>

      <div className="flex flex-col lg:flex-row md:items-center lg:justify-between lg:pr-5">
        <div className="my-6 text-neutral-off-black">
          <p className="text-6xl whitespace-nowrap font-extrabold italic lg:text-8xl">
            <span className="text-primary-purple">{ageYears}</span> year
            {ageYears == 1 ? "" : "s"}
          </p>
          <p className="text-6xl whitespace-nowrap font-extrabold italic lg:text-8xl">
            <span className="text-primary-purple">{ageMonths}</span> month
            {ageMonths == 1 ? "" : "s"}
          </p>
          <p className="text-6xl whitespace-nowrap font-extrabold italic lg:text-8xl">
            <span className="text-primary-purple">{ageDays}</span> day
            {ageDays == 1 ? "" : "s"}
          </p>
        </div>

        <Birthday
          daysLeft={daysLeft}
          monthsLeft={monthsLeft}
          display={display}
          setDisplay={setDisplay}
        />
      </div>
    </div>
  );
}

export default App;
