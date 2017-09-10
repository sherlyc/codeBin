const longestString = (arr) => {
  let longestLength = 0;
  let returnString = "";

  arr.forEach((item) => {
    if ((typeof item === 'string') && (item.length > longestLength)) {
      longestLength = item.length;
      returnString = item;
    }
  })
  return returnString;
}
let arr = ['hello', 'children', 'how can I tell you', 'wakapupu wakamai']
console.log(longestString(arr))
