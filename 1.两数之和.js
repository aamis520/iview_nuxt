/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (45.11%)
 * Total Accepted:    272.6K
 * Total Submissions: 604.3K
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {

  let index1 = 0
  let index2 = 0
  let len = nums.length
  let flag = false
  for (let j = 0; j < len - 1; j++) {
    index1 = j
    for (let i = index1 + 1; i < len; i++) {
      if (nums[i] == target - nums[index1]) {
        index2 = i
        flag = true
        break
      }
    }
    if (flag) {
      break
    }
  }
  return [index1, index2]
};