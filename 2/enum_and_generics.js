var Day;
(function (Day) {
    Day["Sunday"] = "Sunday";
    Day["Monday"] = "Monday";
    Day["Tuesday"] = "Tuesday";
    Day["Wednesday"] = "Wednesday";
    Day["Thursday"] = "Thursday";
    Day["Friday"] = "Firday";
    Day["Saturday"] = "Saturday";
})(Day || (Day = {}));
function printDate(_day) {
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
