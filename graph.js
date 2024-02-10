class Vertex{
    constructor(name){
        this.name = name;
        this.distance = Infinity;
        this.children = [];
        this.visited = false;
        this.seen = false;
    }
}

const A = new Vertex('A');
const B = new Vertex('B');
const C = new Vertex('C');
const D = new Vertex('D');
const E = new Vertex('E');
const F = new Vertex('F');
const G = new Vertex('G');

A.children.push(B,C,D);
B.children.push(C,E);
C.children.push(E,F);
D.children.push(F,G);
E.children.push(F);
F.children.push(G);



const findShortestDistance = (start, end) => {
    start.distance = 0;
    const q = [start];
    const seen = {};

    while(q.length !== 0){
        const curr = q.shift();


        const sen = [];
        console.log('before init every time in the while ' + sen)
    
        
        for(ch of curr.children){
            if(!ch.seen){
            sen.push(ch);
            }
            
            ch.seen = true;
        }

        seen[curr.name] = sen;
        
        
        
        if(curr.name === end.name){
            const path = reconstructPath(start, seen, end)
            console.log(seen);
            return 'distance to ' + end.name + ' is ' + curr.distance + '. And the path is ' + path.join(' -> '); 
        }
        
        if(curr.visited){
            continue;
        }
        
        curr.visited = true;
        let currChildDistance = curr.distance + 1;
        
        for(let child of curr.children){
            if(!child.visited && child.distance > currChildDistance){
                child.distance = currChildDistance;
                q.push(child)
            }
        }
    }
    
    //If there is no path tho the end child, return negative distance
    return -1;
}

const reconstructPath = (start, seenObj, end) => {
    const path = [end.name];
    let lookUpNode = end.name;

    while(lookUpNode !== start.name){
        for(let i in seenObj){
            for(let j of seenObj[i]){
                if(j.name === lookUpNode){
                    path.push(i);
                    lookUpNode = i;
                }
            }
        }
    }
    return path.reverse();
}




console.log(findShortestDistance(A,G));







const graphObj = {
    "A":["B","D","E"],
    "B":["A","C"],
    "C":["B","E","F"],
    "D":["A","E"],
    "E":["A","C","D","F"],
    "F":["C","E"]
}

const graphObj2 = {
    'a':['b','c'],
    'b':['d','e'],
    'c':['f','g'],
    'd':[],
    'e':[],
    'f':[],
    'g':[]
}

//Shortest path graph
const shortPath = {
    'A':['B','C','D'],
    'B':['C','E'],
    'C':['F','E'],
    'D':['F','G'],
    'E':['F'],
    'F':['G'],
    'G':[]
}

// console.log(graphObj);

const bfs = (G,rootNode) => {
    const q = [];
    let visitedObj = {};
    q.push(rootNode);
    console.log(q)
    while(q.length !== 0){
        let visited = q.shift();
        if(visited === 'G'){
            console.log('found the sucker, took me ' + q)
        }
        if(!visitedObj.hasOwnProperty(visited)){
            q.push(...G[visited]);
            visitedObj = {...visitedObj, visited};
            console.log(visitedObj);
        }
    }

}

// bfs(shortPath,'A');