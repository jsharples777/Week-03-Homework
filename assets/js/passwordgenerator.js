class PasswordGenerator {
    constructor() {
        this.lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
        this.upperCaseAlphabet = "ABCDEDFGHIJKLMNOPQRSTUVWXYZ";
        this.digits = "0123456789";
        this.symbols = "!@#$%^&*()-+=[{]}\|;:<,>.?/`~";
    }

    generateItemUsingString(source) {
        let characterIndex = Math.floor(Math.random() * source.length);
        return source[characterIndex];
    }

    generateLowerCaseCharacter() {
        return this.generateItemUsingString(this.lowerCaseAlphabet);
    }

    generateUpperCaseCharacter() {
        return this.generateItemUsingString(this.upperCaseAlphabet);
    }

    generateDigit() {
        return this.generateItemUsingString(this.digits);
    }

    generateSymbol() {
        return this.generateItemUsingString(this.symbols);
    }

    generateCharacter (useLowerCaseAlphabet,useUpperCaseAlphabet,useDigits,useSymbols) {
        let numberOfOptionsForCharacter = 0;

        let options = [0,0,0,0]; // the four options are off initially;

        /* lets "turn on" the options that have been selected */
        if (useLowerCaseAlphabet) {
            options[numberOfOptionsForCharacter] = 1; // 1 is lowercase
            numberOfOptionsForCharacter++;
        }
        if (useUpperCaseAlphabet) {
            options[numberOfOptionsForCharacter] = 2; // 2 is uppercase
            numberOfOptionsForCharacter++;
        }

        if (useDigits) {
            options[numberOfOptionsForCharacter] = 3; // 3 is numeric
            numberOfOptionsForCharacter++;
        }

        if (useSymbols) {
            options[numberOfOptionsForCharacter] = 4; // 4 is symbol
            numberOfOptionsForCharacter++;
        }
        /* randomly choose one of the options and find out which character type it is */
        let randomOptionChosen = Math.floor(Math.random() * numberOfOptionsForCharacter);
        let chosenCharacterGenerator = options[randomOptionChosen];

        switch(chosenCharacterGenerator) {
            case 1 : return this.generateLowerCaseCharacter();
            case 2 : return this.generateUpperCaseCharacter();
            case 3 : return this.generateDigit();
            case 4 : return this.generateSymbol();
        }

    }
    /* Generate a password
        1.  Of length supplied;
        2.  With one or more character types chosen.
     */
    generate (length,useLowerCaseAlphabet,useUpperCaseAlphabet,useDigits,useSymbols) {
        if (useLowerCaseAlphabet === undefined) {
            useLowerCaseAlphabet = true;
        }
        if (useUpperCaseAlphabet === undefined) {
            useUpperCaseAlphabet = false;
        }
        if (useDigits === undefined) {
            useDigits = true;
        }
        if (useSymbols === undefined) {
            useSymbols = false;
        }

        let newPassword = "";
        for (let index = 0; index < length;index++) {
            newPassword += this.generateCharacter(useLowerCaseAlphabet,useUpperCaseAlphabet,useDigits,useSymbols);
        }
        return newPassword;
    }
}