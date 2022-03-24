function ceasar(str, shift) {
  return str.split("").map((symbol) => symbol.charCodeAt(0)).map((code) => String.fromCharCode((code - 97 + shift) % 26 + 97)).join("");
}
export { ceasar };
