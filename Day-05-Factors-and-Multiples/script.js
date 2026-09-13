//************************* 9. Find the HCF and LCM of Three Numbers ***************************//
function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

const a = 8;
const b = 12;
const c = 16;

const hcf = gcd(gcd(a, b), c);
const lcm3 = lcm(lcm(a, b), c);

console.log("HCF:", hcf);
console.log("LCM:", lcm3);
