// find the maximum value of an array
let arr = [9, 2, 3, 4, 5, 10]
let max = arr[0] //9
for (i = 0; i < arr.length; i++) {  //  0 1 2 3 4 5
    if (arr[i] > max) {   //9>9 2>9 3>9 4>9 5> 10>9
        max = arr[i]   //10
    }
}
console.log(max)
// find the sum of maximum and minimum values of array
arr = [9, 11, 3, 4, 5, 10]
max = arr[0] //9
min = arr[0] //9
for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
    if (arr[i] < min) {
        min = arr[i]
    }
}
let sum = min + max
console.log(sum)
// print duplicates values in array
arr = [1, 2, 3, 4, 7, 6, 1, 2, 3, 4]
org = []
dup = []
for (i = 0; i < arr.length; i++) {
    if (!org.includes(arr[i])) {
        org.push(arr[i])
    }
    else {
        dup.push(arr[i])
    }
}
console.log(org, dup)
