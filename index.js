// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2)
}

const returnLastTwoDrivers = (arr) => {
    return arr.slice(arr.length-2, arr.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
    return (fare) => {
        return fare * num
    }
}

const fareDoubler = (num) => createFareMultiplier(2)(num)

const fareTripler = (num) => createFareMultiplier(3)(num)

const selectDifferentDrivers = (arr, f) => {
    return f(arr)
}