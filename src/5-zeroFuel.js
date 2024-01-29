const zeroFuel = (distanceToPump, msg, fuelLeft) => msg * fuelLeft >= distanceToPump

module.exports = zeroFuel