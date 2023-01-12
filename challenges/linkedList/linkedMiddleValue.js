// Write a function, middleValue, that takes in the head of a linked list as an argument. The function should return the value of the middle node in the linked list. If the linked list has an even number of nodes, then return the value of the second middle node.
// You may assume that the input list is non-empty.

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
