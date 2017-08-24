let items = {
  qty: 2,
  total: 5
}

function addToItems(qty) {
  return this.qty + qty
}

function addToTotal(count) {
  return this.total + count
}

let currentQty = addToItems.call(items, 1) // functionName.call(obj, functionArgument)
let currentTotal = addToTotal.call(items, 2)
console.log("Items Qty:" + currentQty, "Items Total:" + currentTotal)
