function reverseInPlace(nums) {
  for(let i = 0; i < Math.round(nums.length / 2); i++) {
    swap = nums[i];
    nums[i] = nums[nums.length - 1 - i];
    nums[nums.length-1-i] = swap;
  };
  return nums;
};

console.log(reverseInPlace([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));