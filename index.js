// Code your solution in this file!
const returnFirstTwoDrivers=function (arrayDrivers){
return [arrayDrivers[0], arrayDrivers[1]]
}
const returnLastTwoDrivers=function (arrayDrivers){
    return [arrayDrivers[arrayDrivers.length-2], arrayDrivers[arrayDrivers.length-1]]
    }

let selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
return (fare)=> fare*int
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}

const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, func){
return func(arrayOfDrivers)
}