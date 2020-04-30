// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2)

const returnLastTwoDrivers = (drivers) => {
    let num = drivers.length - 2
    return drivers.slice(num)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return (fare) => multiplier * fare
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare)

const fareTripler = (fare) => createFareMultiplier(3)(fare)

function selectDifferentDrivers(drivers, driverFunc) {
    return driverFunc(drivers)
}
