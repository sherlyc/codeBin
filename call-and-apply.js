let items = {
  qty: 2,
  total: 5
}

function addToItems(a, b, c) {
  return this.qty + a + b + c
}

function addToTotal(count) {
  return this.total + count
}

let currentQty = addToItems.call(items, 1, 2, 3) // functionName.call(obj, functionArgument)
let currentTotal = addToTotal.call(items, 2)
let arr = [1, 2, 3]
let applyQty = addToItems.apply(items, arr) // you can pass in an array of arguments when using apply
console.log("Items Qty:" + currentQty, "Items Total:" + currentTotal)
console.log("applyQty:" + applyQty)
