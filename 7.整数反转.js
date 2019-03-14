/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.83%)
 * Total Accepted:    91.3K
 * Total Submissions: 286.9K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 示例 1:
 * 
 * 输入: 123
 * 输出: 321
 * 
 * 
 * 示例 2:
 * 
 * 输入: -123
 * 输出: -321
 * 
 * 
 * 示例 3:
 * 
 * 输入: 120
 * 输出: 21
 * 
 * 
 * 注意:
 * 
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  var res;
  var xStr = x.toString();
  if (xStr.indexOf("-") == 0) {
    xStr = xStr.substring(1, x.length);
    res = xStr.split("").reverse().join("");
    while (res.indexOf("0") == 0) {
      res = res.substring(1, res.length);
      continue;
    }
    res = "-" + res;
    res = parseInt(res);
    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
      return 0;
    }
    return res;
  } else if (xStr == "0") {
    return 0;
  } else {
    res = xStr.split("").reverse().join("");
    while (res.indexOf("0") == 0) {
      res = res.substring(1, res.length);
      continue;
    };
    res = parseInt(res);
    if (res > Math.pow(2, 31) - 1 || res < -Math.pow(2, 31)) {
      return 0;
    }
    return res;
  }
};