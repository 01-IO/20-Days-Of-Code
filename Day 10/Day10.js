function getCount(objects) {
    let count = 0;
    
    for (const i in objects) {
        if(objects[i].x==objects[i].y) {
            count++
        }
    }
    return count
}
let objects = [
    {
        x:4, y:8
    },
    {
        x:5,y:5
    },
    {
        x:1,y:3    
    }]
console.log(getCount(objects))