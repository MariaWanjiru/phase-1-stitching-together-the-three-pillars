// Ready for final submission
// Select element by ID
function selectElementById(id) {
  return document.getElementById(id);
}

// Select elements by class name
function selectElementsByClassName(className) {
  return document.getElementsByClassName(className);
}

// Select elements by tag name
function selectElementsByTagName(tagName) {
  return document.getElementsByTagName(tagName);
}

// Update text content of an element
function updateTextContent(id, newText) {
  const el = document.getElementById(id);
  if (el) el.textContent = newText;
}

// Add a new element with text inside a parent
function addElement(tag, parentId, text) {
  const parent = document.getElementById(parentId);
  if (!parent) return;
  const el = document.createElement(tag);
  el.textContent = text;
  parent.appendChild(el);
}

// Remove an element by ID
function removeElement(id) {
  const el = document.getElementById(id);
  if (el && el.parentNode) el.parentNode.removeChild(el);
}