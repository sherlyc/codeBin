const getFileExtension = (i) => {
  if (i.indexOf(".") < 0) {
    return false;
  }

  let filenameParts = i.split(".")
  return filenameParts[filenameParts.length - 1];
}

console.log(getFileExtension('hello.txt')) //txt
