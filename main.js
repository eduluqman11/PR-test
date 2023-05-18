function random(n){
    let temp=[]
    for(let i=0;i<n;i++){
        temp[i]=Math.floor(Math.random()*101)
    }
    return temp
}
console.log(random(10))