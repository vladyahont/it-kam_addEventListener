function addErrorClass(elementId) {
  var firstName = document.getElementById("first-name");
  var lastName = document.getElementById("last-name");
  var address = document.getElementById("address");
}

function addErrorClass(elementId) {
  var element = document.getElementById(elementId);
  element.className = "error-input";
}

function addErrorClassToAllElements() {
  addErrorClass("first-name");
  addErrorClass("last-name");
  addErrorClass("address");
}

//1.) addErrorClassToAllElements();

//2.) window.setTimeout(addErrorClassToAllElements, 2000);

//3.) var sendButton = document.getElementById("send-button");
// sendButton.addEventListener("click", onSendButtonClicl);
// function onSendButtonClicl() {
//   addErrorClass("first-name");
//   addErrorClass("last-name");
//   addErrorClass("address");
// }

//4.) var firstNameEl = document.getElementById("first-name");
// firstNameEl.addEventListener("keydown", onFirstNameKeydown);
// function onFirstNameKeydown() {
//   addErrorClass("first-name");
// }
