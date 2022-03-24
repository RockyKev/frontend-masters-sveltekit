function selectable(node) {
  const selection = window.getSelection();
  const range = document.createRange();
  function select() {
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  }
  node.addEventListener("click", select);
}
export { selectable };
