let statesNeeded = new Set(['oh', 'il', 'id', 'ny', 'pn', 'fl']);

const stations = {
    'kone': new Set(['oh', 'il', 'ny']),
    'ktwo': new Set(['oh', 'pn', 'id', 'il']),
    'kthree': new Set(['fl', 'pn', 'ny']),
    'kfour': new Set(['ny', 'fl', 'pn', 'oh']),
    'kfive': new Set(['il', 'ny', 'fl'])
}

const finalStations = new Set();

const greedy = () => {

    while(statesNeeded.size !== 0){
    let bestStation = null;
    let statesCovered = new Set();
    
    for(let [station, statesPerStation] of Object.entries(stations)){
        console.log(station + ' ' + statesPerStation)
        let covered = intersection(statesNeeded, statesPerStation);
        if (covered.size > statesCovered.size){
            bestStation = station;
            statesCovered = covered;
        }
    }
    statesNeeded = difference(statesNeeded, statesCovered);
    finalStations.add(bestStation);
    
    }
}

greedy();
console.log(finalStations)


function intersection(setA, setB){
    const _intersection = new Set();
    for(const el of setB){
        if(setA.has(el)){
            _intersection.add(el)
        }
    }
    return _intersection;
}
function difference(setA,setB){
    const _difference = new Set(setA);
    for(const el of setB){
        if(setA.has(el)){
            _difference.delete(el)
        }
    }
    return _difference;
}

// console.log(intersection(statesNeeded, stations.kone))
// console.log(difference(statesNeeded, stations.kone))