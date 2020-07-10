/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const result = []
  let sum = 0
  for (let num of nums) {
    sum += num
    result.push(sum)
  }
  return result
};
