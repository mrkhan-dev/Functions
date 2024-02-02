function evenStr(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    console.log("even size");
  } else {
    console.log("odd size");
  }
}

evenStr("shahjalal");
evenStr("khan");
