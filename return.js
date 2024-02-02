function tenTimes(number) {
  return number * 10;
}

// tenTimes(20);
const finalNumber = tenTimes(5);
console.log(finalNumber);

// conditional return
function isOdd(inpNum) {
  if (inpNum % 2 === 1) {
    return true;
  }
  return false;
}
console.log(isOdd(41));
console.log(isOdd(40));
