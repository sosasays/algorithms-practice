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
