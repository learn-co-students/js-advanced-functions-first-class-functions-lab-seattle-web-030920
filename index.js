// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){ return drivers.slice(0,2)}

const returnLastTwoDrivers = function(drivers){ return drivers.slice(-2)}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const selectDifferentDrivers = function(drivers, selectFunction){
    return selectFunction(drivers)
}

const createFareMultiplier = function (multiplier){
    return function(value){
        return multiplier * value
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)