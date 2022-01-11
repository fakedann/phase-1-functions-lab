// Code your solution in this file!
function distanceFromHqInBlocks(someValue){
    return Math.abs(42-someValue);
}

function distanceFromHqInFeet(value2) {
    return 264*distanceFromHqInBlocks(value2);
}

function distanceTravelledInFeet(pos1, pos2){
    return Math.abs(pos1-pos2)*264;
}

function calculatesFarePrice(start, destination){
    const feet = distanceTravelledInFeet(start, destination);
    
    if (feet < 401){
        return 0;
    }else if (feet < 2001){
        return ((feet-400)*2)/100;
    }else if (feet < 2501){
        return 25;
    }else{
        return 'cannot travel that far';
    }
}