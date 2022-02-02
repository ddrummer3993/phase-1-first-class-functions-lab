// create returnFirstTwoDrivers

const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2);
};

// create returnLastTwoDrivers

const returnLastTwoDrivers = function (array) {
    return array.slice(-2);
};

// create selectingDrivers array

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

// create createFareMultiplier

function createFareMultiplier (mult) {
    return function (fare) {
        return fare * mult;
    };
};

//create fareDoubler()

const fareTwoX = createFareMultiplier(2);
function fareDoubler(fare) {
    return fareTwoX(fare);
};

//create fareTripler

const fareThreeX = createFareMultiplier(3);
function fareTripler(fare) {
    return fareThreeX(fare);
};

// create selectDifferentDrivers

function selectDifferentDrivers(array, fn) {
    return fn(array);
};
