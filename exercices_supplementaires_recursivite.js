//1
/*
const factorielle = (n) => {
    if (n <= 1) return 1; // Cas de base [cite: 45, 46]
    return n * factorielle(n - 1);
};
*/

//2
/*
const sommeJusqua = (n) => {
    if (n <= 1) return n; // Cas de base [cite: 51]
    return n + sommeJusqua(n - 1);
};
*/

//3
/*
const compterChiffres = (n) => {
  if (n < 10) return 1;
  return 1 + compterChiffres(Math.floor(n / 10));
};
 */

//4
/*
const sommeChiffres = (n) => {
  if (n === 0) return 0;
  return (n % 10) + sommeChiffres(Math.floor(n / 10));
};
 */

//5
/*
const inverser = (str) => {
  if (str === "") return ""; // Cas de base [cite: 62]
  return inverser(str.substr(1)) + str.charAt(0);
};
 */

//6
/*
const estPalindrome = (str) => {
  // Nettoyage fonctionnel de la chaîne
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');

  const verifier = (s) => {
    if (s.length <= 1) return true;
    if (s[0] !== s[s.length - 1]) return false;
    return verifier(s.substring(1, s.length - 1));
  };

  return verifier(cleanStr);
};
 */

//7
/*
const puissance = (base, exposant) => {
  if (exposant === 0) return 1; // Cas de base [cite: 76]
  return base * puissance(base, exposant - 1);
};
 */

//8
/*
const doublerTableau = ([first, ...rest]) => {
  if (first === undefined) return []; // Cas de base [cite: 86]
  return [first * 2, ...doublerTableau(rest)];
};
 */

//9
/*
const aplatir = (arr) => {
  if (!Array.isArray(arr)) return [arr];
  if (arr.length === 0) return []; // Cas de base [cite: 93]

  const [first, ...rest] = arr;
  return [...(Array.isArray(first) ? aplatir(first) : [first]), ...aplatir(rest)];
};
 */

//10
/*
const fibonacci = (n) => {
  if (n === 0) return 0; // [cite: 102]
  if (n === 1) return 1; // [cite: 103]
  return fibonacci(n - 1) + fibonacci(n - 2);
};
 */