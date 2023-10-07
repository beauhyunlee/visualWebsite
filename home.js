var oDoc;
var userInput = document.getElementById("myDoc");
function initiateDocs() {
  oDoc = document.getElementById("textBox");
}
function formatType(sCmd, sValue) {
  document.execCommand(sCmd, false, sValue); oDoc.focus();
}
var loadFile = function(event) {
  oDoc.focus();
  formatType("insertImage", URL.createObjectURL(event.target.files[0]));
};
if (userInput == "") {
  alert("ENTER SOMETHING!!!");
}