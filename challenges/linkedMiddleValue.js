// Time Complexity: O(n) - One iteration through the LL.
// Space Complexity: O(1) - Two variables, no additional space that scales with input.

const middleValue = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.val;
};
        
module.exports = {
  middleValue,
};
