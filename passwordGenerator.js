function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;
    
    // Tähemärgid
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let allChars = '';

    if (includeUppercase) {
        allChars += uppercaseLetters;
    }
    if (includeLowercase) {
        allChars += lowercaseLetters;
    }
    if (includeNumbers) {
        allChars += numbers;
    }
    if (includeSymbols) {
        allChars += symbols;
    }

    if (allChars === '') {
        alert('Vali vähemalt üks tingimus.');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    document.getElementById('passwordOutput').innerText = password;
}

function copyPassword() {
    const passwordText = document.getElementById('passwordOutput').innerText;
    if (!passwordText) {
        alert('Lõikelaud on tühi');
        return;
    }

    const tempInput = document.createElement('input');
    tempInput.value = passwordText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert('Salasõna kopeeritud!');
}
