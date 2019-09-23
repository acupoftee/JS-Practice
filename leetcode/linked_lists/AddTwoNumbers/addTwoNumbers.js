/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let res = new ListNode(0)
  let carry = 0
  let currentNode = res

  while (l1 !== null || l2 !== null) {
    let sum = 0
    if (carry) {
      sum = sum + carry
      carry = 0
    }
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2) {
      sum += l2.val
      l2 = l2.next
    }

    if (sum >= 10) {
      carry = 1
      sum = sum % 10
    }
    currentNode.next = new ListNode(sum)
    currentNode = currentNode.next
  }
  if (carry) {
    currentNode.next = new ListNode(carry)
  }
  return res.next
}
