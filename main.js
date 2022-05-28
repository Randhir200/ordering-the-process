let a1 = [3,2,1]
let a2 = [1,2,3]
let n = a1.length;
let steps = 0;
for(let i=0;i<n;i++){
    while(a1[0]!=a2[0]){
        let v = a1.shift()
        a1.push(v)
        steps++;
    }
    a1.shift()
    a2.shift()
    steps++;
}

console.log(steps)