function getSecondLargest(nums) {
    let mySet = new Set([]);
    for (let i = 0; i<nums.length; i++) {
        mySet.add(nums[i]);
    }
    let myArr = [];
    for (let element of mySet) {
        myArr.push(element);
    }
    myArr.sort(function(a, b){return a - b});
    return myArr[myArr.length-2];
}

let n = prompt("Enter the length of the matrix: ");
var nums = [];
for(let i=0; i<n;i++) {
    nums[i] = prompt("Enter value for cell " + i + " : ")
}

document.getElementById("demo1").innerHTML = getSecondLargest(nums)