const Q2 = (target) =>
  Array.from(Array(target).keys(), (val) => val + 1).filter(
    (v) => (v % 3 != 0 && v % 5 != 0) || (v % 3 === 0 && v % 5 === 0)
  );

console.log(Q2(15).join(", "));
