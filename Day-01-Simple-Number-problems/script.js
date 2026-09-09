//************************* 11. Print only the numbers that are both even and perfect squares ***************************//

const num11 = 20;
for (let i = 1; i <= num11; i++) {
  let sq = i ** 2;
  if (sq <= num11 && sq % 2 === 0) {
    console.log(sq);
  }
}
