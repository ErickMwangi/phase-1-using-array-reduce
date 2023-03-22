const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let batteries = 0;
let totalBatteries =  batteryBatches.reduce(function(accumulator, element){
    return accumulator += element}
)
