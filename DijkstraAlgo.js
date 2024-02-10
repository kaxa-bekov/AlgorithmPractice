class Vertex{
    constructor(name){
        this.name = name;
    }
}

const Start = new Vertex('Start');
const A = new Vertex('A');
const B = new Vertex('B');
const C = new Vertex('C');
const D = new Vertex('D');
const Finish = new Vertex('Finish');



const Graph = {
    Start: {A:2,B:2},
    A:{C:2,Finish:2},
    B:{A:2},
    C:{B:-1,Finish:2},
    Finish:null
}

const Costs = {}
for(let node in Graph){
    Costs[node] = node === 'Start' ? 0 : Infinity;

}

const Parents = {}
for(let node in Graph){
    Parents[node] = null;
}


const processed = [];

const dijkstraSearch = () => {

    let node = findLowestCost(Costs);
    while(node){
        let cost = Costs[node];
        let neighbors = Graph[node]
        for(let n in neighbors){
            let new_cost = cost + neighbors[n]
            if(Costs[n] > new_cost){
                Costs[n] = new_cost;
                Parents[n] = node;
            }
        }
        processed.push(node)
        node = findLowestCost(Costs)
    }
    console.log(Costs);
    console.log(Parents);
}

const findLowestCost = (Costs) => {

    let lowestCost = Infinity;
    let lowestCostNode = null;
    for(let node in Costs){
        let cost = Costs[node]
        if(cost < lowestCost && !processed.includes(node)){
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

dijkstraSearch();