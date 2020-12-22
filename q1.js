const Q1_A = (st) => st.split("").reverse().join("");

const Q1_B = (st) =>
  st
    .split(" ")
    .map((v) => Q1_A(v))
    .join(" ");

console.log(Q1_A("junyiacademy"));
console.log(Q1_B("flipped class room is important"));
