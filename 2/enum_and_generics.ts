enum Day {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Firday",
  Saturday = "Saturday",
}

function printDate(_day: number) {
  switch (_day) {
    case 1:
      console.log(Day.Sunday);
      break;
    case 2:
      console.log(Day.Monday);
      break;
    case 3:
      console.log(Day.Tuesday);
      break;
    case 4:
      console.log(Day.Wednesday);
      break;
    case 5:
      console.log(Day.Thursday);
      break;
    case 6:
      console.log(Day.Friday);
      break;
    case 7:
      console.log(Day.Saturday);
      break;
  }
}

printDate(2);
printDate(5);
printDate(7);
