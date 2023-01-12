// Write a function, linkedListCycle, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list contains a cycle.

// Time Complexity: O(n) - One iteration through the LL.
// Space Complexity: O(1) - Two variables, no additional space that scales with input.

const linkedListCycle = (head) => {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
        
module.exports = {
  linkedListCycle,
};
