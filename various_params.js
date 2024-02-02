function evenStr(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("even size");
  } else {
    console.log("odd size");
  }
}

evenStr("shahjalal"); //shahjalal 9 odd size
evenStr("khan"); //khan 4 even size

function doubleOrTriple(number, double) {
  if (double) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}

console.log(doubleOrTriple(4, false)); //12
console.log(doubleOrTriple(40, true)); //80
