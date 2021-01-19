
//Map --start

let sampleArray = [1,2,3,4,5,6,7,8,9,10];

let mapResult = sampleArray.map(current=> current * current);

let reduceResult = sampleArray.reduce((acc, curr)=> [...acc, curr * curr], []);

console.log(mapResult);
console.log(reduceResult);

//Map --end

//Filter -- start
let sampleArray = [1,2,3,4,5,6,7,8,9,10];

let filteredArray = sampleArray.filter(current=>current > 5);

let reducedFilterArray = sampleArray.reduce((acc, curr)=> curr > 5 ? [...acc, curr]: acc,[]);

console.log(filteredArray);
console.log(reducedFilterArray);

//Filter--End

//Find --start

let sampleArray = [1,2,3,4,5,6,7,8,9,10];

let findResult = sampleArray.find(current => current > 5);

let reduceResult = sampleArray.reduce((acc, curr)=> curr > 5 ? (acc ? acc : curr) : undefined, undefined);

console.log(findResult);

console.log(reduceResult);

//Find --end

//Every --start

let sample1Array = [1,2,3,4,5,6,7,8,9,10];
let sample2Array = [2,5,7,9,11,13,15];

let everyTrue = sample1Array.every(current=> current < 11);
let everyFalse = sample2Array.every(current=> current < 11);

let reduceTrue = sample1Array.reduce((acc, curr)=> curr < 11 ? acc: false, true);
let reduceFalse = sample2Array.reduce((acc, curr)=> curr < 11 ? acc: false, true);

console.log('sample array 1 ->', everyTrue);
console.log('sample array 2 ->', everyFalse);

console.log('sample array 1 ->', reduceTrue);
console.log('sample array 2 ->', reduceFalse);

//Every --end


//Some --start

let sample1Array = [1,2,3,4,5,6,7,8,9,10];
let sample2Array = [2,5,7,9,11]

let someFalse = sample1Array.some(current=> current > 10);
let someTrue = sample2Array.some(current=> current > 10);

let reduceFalse = sample1Array.reduce((acc, curr)=> curr > 10 ? true : acc, false);
let reduceTrue = sample2Array.reduce((acc, curr)=> curr > 10 ? true : acc, false);

console.log('sample array 1 ->', someFalse);
console.log('sample array 2 ->', someTrue);

console.log('sample array 1 ->', reduceFalse);
console.log('sample array 2 ->', reduceTrue);

//Some --end
