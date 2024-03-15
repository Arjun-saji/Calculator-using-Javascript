input =''
function buttonClick(value) 
{
	input=input+value;
	document.getElementById('screen').value = input;
}
function equals()
{
	var equl=eval(input);
	input=equl;
	document.getElementById('screen').value=input;
}
function clearw()
{
	input="";
	document.getElementById('screen').value=input;
}

function deleted() {
  const inputField = document.getElementById("screen"); // Get the input field with the ID "screen"

  // Check if there's any value to delete
  if (inputField.value.length > 0) {
    const updatedValue = inputField.value.slice(0, -1); // Remove the last character
    inputField.value = updatedValue; // Update the input field with the trimmed value
  }
}



