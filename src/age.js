export const age = function(day, month, year) {

  const monthIndex = month - 1;
  const monthArray = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let millis = Date.now() - (new Date(year, monthIndex, day)).getTime();
  let secs = Math.floor(millis / 1000);
  let hours = Math.floor(secs / 3600);
  let difference = (new Date()).getFullYear() - year;

  let days = Math.floor(hours / 24) - Math.floor(difference / 4);

  let d400 = Math.floor(difference / 400);
  let d100 = Math.floor(difference / 100);

  let totalDifference = d400 - d100;
  days -= totalDifference - (d100 % 4 === 0 ? 1 : 0);
  let years = Math.floor(days / 365);

  days =  days % 365;
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
    "years": years,
    "months": monthsSpent,
    "days": daysSpent,
    "birthday": {
      "months": monthsLeft,
      "days": days
    }
  };
}