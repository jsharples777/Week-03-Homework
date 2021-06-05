/* simple debugging code using console log */
let debug = true;

let log = function(message) {
  if (debug) {
    this.console.log(message);
  }
}



log("Started Event Handlers");

/* setup the display of the slider value for the password length */
let passwordLengthElement = this.document.getElementById("pLength");
let displaySpanElement = this.document.getElementById("pLengthDisplay");

let pLengthDisplayHandler = function(event) {
  log("Changed value to " + passwordLengthElement.value);
  displaySpanElement.innerText = passwordLengthElement.value;
}

passwordLengthElement.onchange = pLengthDisplayHandler;
passwordLengthElement.oninput = pLengthDisplayHandler;

/* setup the validation of the checkboxes to ensure at least is selected */
let useLowerCaseElement = this.document.getElementById("useLowerCase");
let useUpperCaseElement = this.document.getElementById("useUpperCase");
let useNumericElement = this.document.getElementById("useNumeric");
let useSymbolElement = this.document.getElementById("useSymbol");

let generateButtonElement = this.document.getElementById("generate");
let characterTypeWarning =this.document.getElementById("passwordWarning");

let checkValidationHandler = function(event) {
  let isLowerCaseChecked = useLowerCaseElement.checked;
  let isUpperCaseChecked = useUpperCaseElement.checked;
  let isNumericChecked = useNumericElement.checked;
  let isSymbolChecked = useSymbolElement.checked;

  if ((!isLowerCaseChecked) &&
      (!isUpperCaseChecked) &&
      (!isNumericChecked) &&
      (!isSymbolChecked)) {
        generateButtonElement.disabled = true;
        characterTypeWarning.style.display = "block";
        log("Validation Handler: no checkbox selected");
    }
    else {
      generateButtonElement.disabled = false;
      characterTypeWarning.style.display = "none";
      log("Validation Handler: at least one checkboxes selected");
    }
}

useLowerCaseElement.onchange = checkValidationHandler;
useUpperCaseElement.onchange = checkValidationHandler;
useNumericElement.onchange = checkValidationHandler;
useSymbolElement.onchange = checkValidationHandler;

/*
  When the button is clicked, generate the password and display it
*/
let passwordElement = this.document.getElementById("password");
let generator = new PasswordGenerator();

let generatePasswordHandler = function(event) {
  // collect the values for the password generation
  let passwordLength = passwordLengthElement.value;
  let useLowerCase = useLowerCaseElement.checked;
  let useUpperCase = useUpperCaseElement.checked;
  let useNumeric = useNumericElement.checked;
  let useSymbol = useSymbolElement.checked;

  
  let password = generator.generate(passwordLength,useLowerCase,useUpperCase,useNumeric,useSymbol);
  log("Password has length " + password.length + " and is " + password);
  passwordElement.value = password;
}

generateButtonElement.onclick = generatePasswordHandler;
