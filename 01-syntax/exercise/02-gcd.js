function gcd(a, b) {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
}

console.log(gcd(15, 5));
console.log(gcd(2154, 458));
