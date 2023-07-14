const falseLeaps = function (currentYear, year) {
  function spread(number) {
    const digits = String(number).split("").reverse();
    let spread = digits.map((digit, index) => digit * 10 ** index);
    return spread.slice(2).reduce((prev, curr) => prev + curr, 0);
  }

  let leaps = 0;
  let i = spread(currentYear);
  if (currentYear === i) {
    i -= 100;
  }

  for (; i > year; i -= 100) {
    if (i % 400 !== 0) {
      leaps += 1;
    }
  }

  return leaps;
};

export const age = function (day, month, year) {
  const monthIndex = month - 1;
  const monthArray = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let millis = Date.now() - new Date(year, monthIndex, day).getTime();
  let secs = Math.floor(millis / 1000);
  let hours = Math.floor(secs / 3600);

  let days = Math.floor(hours / 24);

  let currentYear = new Date().getFullYear();
  let difference = currentYear - year;
  let supposedLeapYears = Math.floor(difference / 4);

  days -= supposedLeapYears;
  days += falseLeaps(currentYear, year);

  let years = Math.floor(days / 365);

  days = days % 365;

  let daysSpent = days;

  let monthsSpent = 0;
  for (let i = monthIndex; i < monthIndex + 12; i++) {
    let value = monthArray[i % 12];
    if (value > daysSpent) {
      break;
    } else if (value <= daysSpent) {
      daysSpent = daysSpent - value;
      monthsSpent += 1;
    }
  }

  days = 365 - days;
  let monthsLeft = 0;
  for (let i = monthIndex; i < monthIndex + 12; i++) {
    let value = monthArray[i % 12];
    if (value > days) {
      break;
    } else if (value <= days) {
      days = days - value;
      monthsLeft += 1;
    }
  }

  return {
    years: years,
    months: monthsSpent,
    days: daysSpent,
    birthday: {
      months: monthsLeft,
      days: days,
    },
  };
};
