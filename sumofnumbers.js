const testNums = [1, 2, 3, 4];

//sum
function sumFor(nums) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sumFor(testNums));

//counter
function sumWhile(nums) {
  let total = 0;
  let i = 0;
  while(i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}

console.log(sumWhile(testNums));

//recursion

function sumRecursion(nums) {
  if (nums.length === 0) {
    return 0;
  } else {
    //recursive condition; add head of array to recursive call of remainder of array
  }
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
}

console.log(sumRecursion(testNums));

function sumTheSimpleWay(nums) {
  return _.reduce(nums, function(memo, num){ return memo + num; }, 0);
}

console.log(sumTheSimpleWay(testNums));
