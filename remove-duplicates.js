const removeDuplicatesWithSet = nums => [...new Set(nums)];

const removeDuplicatesWithReduce = function(nums){
    return nums.reduce((acc, curr, i, arr)=>{
        if(curr !== arr[i+1]){
            return [...acc, curr];
        }
        return [...acc];
    }, [])
}

const removeDuplicatesWithMap = function(nums){
    let myMap = new Map();
    let result = [];
    for(let i = 0; i< nums.length; i++){
        if(!myMap.has(nums[i])){
            result.push(nums[i]);
            myMap.set(nums[i], i);
        }
    }

    return result;
} // this will work for unsorted array as well.

nums = [0,0,1,1,2,2,3,3,4];

console.log(removeDuplicatesWithReduce(nums));
console.log(removeDuplicatesWithSet(nums));
console.log(removeDuplicatesWithMap(nums));

