// Code your solution in this file!
const returnFirstTwoDrivers = function(inputArray) {
    return inputArray.slice(0,2)
}

const returnLastTwoDrivers = function(inputArray) {
    return inputArray.slice(-2, inputArray.length);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(mult){
    return function(fare) {return fare * mult}
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare)
{
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers = function(drivers, returnFunc)
{
    return returnFunc(drivers);
}





//console.log(fareDoubler(10));

// const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
// value = drivers.slice(-2, drivers);
// console.log(value.length);
// console.log(returnLastTwoDrivers(drivers))

// const fareQuintupler = createFareMultiplier(5);
// console.log(fareQuintupler(5));