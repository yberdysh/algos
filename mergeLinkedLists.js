var mergeTwoLists = function(l1, l2) {
  let merged;
  let mergedCurr;
  let curr1 = l1
  let curr2 = l2
  let current;
  if (!curr1 && !curr2) {
    return null
  }
  while (curr1 && curr2) {
    if (curr1.val < curr2.val) {
      let temp = curr1.next
      curr1.next = null
      if (!merged) {
        mergedCurr = curr1
        merged = mergedCurr
      } else {
        mergedCurr.next = curr1
        mergedCurr = mergedCurr.next
      }
      curr1 = temp
    } else {
      let temp = curr2.next
      curr2.next = null
      if (!merged) {
        mergedCurr = curr2
        merged = mergedCurr
      } else {
        mergedCurr.next = curr2
        mergedCurr = mergedCurr.next
      }
      curr2 = temp
    }
  }
  current = curr1 || curr2
  if (mergedCurr) {
    mergedCurr.next = current
  } else {
    merged = current
  }
  return merged;
};

var mergeKLists = function(lists) {
  if (lists.length === 1) {
    return lists[0]
  } else if (lists.length === 0) {
    return null
  } else {
    let merged = lists[0]
    lists = lists.slice(1)
    while (lists.length) {
      merged = mergeTwoLists(merged, lists.pop())
    }
    return merged;
  }
};
