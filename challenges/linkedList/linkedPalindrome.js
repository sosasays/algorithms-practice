// Write a function, linkedPalindrome, that takes in the head of a linked list as an argument. The function should return a boolean indicating whether or not the linked list is a palindrome. A palindrome is a sequence that is the same both forwards and backwards.

// Time Complexity: O(n) - One main iteration through the LL. The rest are just adding n's since they aren't nested.
// Space Complexity: O(n) - for the vals array holding the values from the LL.

const linkedPalindrome = (head) => {
  const vals = [];
  let current = head;
  while (current) {
    vals.push(current.val);
    current = current.next;
  }
  return vals.join('') === vals.reverse().join('');
};

module.exports = {
  linkedPalindrome,
};
