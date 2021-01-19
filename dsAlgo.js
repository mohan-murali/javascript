var twoSum = function(numbers, target) {
    let i=0;
    let j=numbers.length-1;
    while(numbers[i] + numbers[j]!== target){
        if(numbers[i]+numbers[j]< target){
            i++;
        }
        if(numbers[i] + numbers[j] > target){
            j--;
        }
    }

    return [i+1, j+1];
};

var twoSumFunctional = function(numbers, target){
    let i=0;
    let j= numbers.length-1;
    // return findEqualIndex(numbers, target,i,j);
    return findIndex(numbers, target, i, j);

}

function findEqualIndex(numbers, target, i, j){
    if(numbers[i] + numbers[j] === target){
        return [i+1, j+1];
    } else if (numbers[i] + numbers[j] < target){
        return findEqualIndex(numbers, target, ++i, j);
    } else {
        return findEqualIndex(numbers, target, i, --j);
    }
}

const findIndex = (numbers, target, i, j) =>
    (numbers[i] + numbers[j]=== target) ? [i+1, j+1]
    : (numbers[i] + numbers[j] < target) ? findIndex(numbers, target, ++i, j)
    : findIndex(numbers, target, i, --j);


numbers = [2,7,11,15];
target = 9;

console.log(twoSum(numbers,target));

console.log(twoSumFunctional(numbers, target));