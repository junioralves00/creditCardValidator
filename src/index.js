function validateCreditCardNumber(cardNumber) {
    // Remove all non-digit characters
    cardNumber = cardNumber.replace(/\D/g, '');

    // Check if the card number is empty or not a number
    if (!cardNumber || isNaN(cardNumber)) {
        return false;
    }

    // Luhn Algorithm to validate the card number
    let sum = 0;
    let shouldDouble = false;

    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i));

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    if (sum % 10 !== 0) {
        return false;
    }

    // Card type validation
    const visa16Regex = /^4[0-9]{15}$/;
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const visaElectronRegex = /^(4026|417500|4508|4844|4913|4917)[0-9]{12}$/;
    const mastercardRegex = /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12}))$/;
    const eloRegex = /^(4011|4312|4389|4514|4576|5041|5066|5090|6277|6362|6363|6504|6505|6506|6507|6509|6516|6550)[0-9]{12,15}$/;
    const amexRegex = /^3[47][0-9]{13}$/;
    const discoverRegex = /^(6011|65|64[4-9])[0-9]{12,15}$/;
    const hipercardRegex = /^606282[0-9]{10}$/;
    const dinersClubRegex = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
    const enrouteRegex = /^(2014|2149)[0-9]{11}$/;
    const jcbRegex = /^(?:2131|1800|35\d{3})\d{11}$/;
    const voyagerRegex = /^8699[0-9]{11}$/;
    const auraRegex = /^50[0-9]{14,17}$/;
    const maestroRegex = /^(5018|5020|5038|6304|6759|6761|6763)[0-9]{8,15}$/;

    if (visa16Regex.test(cardNumber)) {
        return 'Visa 16 Digits';
    } else if (visaRegex.test(cardNumber)) {
        return 'Visa';
    } else if (visaElectronRegex.test(cardNumber)) {
        return 'Visa Electron';
    } else if (mastercardRegex.test(cardNumber)) {
        return 'Mastercard';
    } else if (eloRegex.test(cardNumber)) {
        return 'Elo';
    } else if (amexRegex.test(cardNumber)) {
        return 'American Express';
    } else if (discoverRegex.test(cardNumber)) {
        return 'Discover';
    } else if (hipercardRegex.test(cardNumber)) {
        return 'Hipercard';
    } else if (dinersClubRegex.test(cardNumber)) {
        return 'Diners Club';
    } else if (enrouteRegex.test(cardNumber)) {
        return 'Enroute';
    } else if (jcbRegex.test(cardNumber)) {
        return 'JCB';
    } else if (voyagerRegex.test(cardNumber)) {
        return 'Voyager';
    } else if (auraRegex.test(cardNumber)) {
        return 'Aura';
    } else if (maestroRegex.test(cardNumber)) {
        return 'Maestro';
    } else {
        return false;
    }
}

// Example usage:
// console.log(validateCreditCardNumber("4539578763621486")); // Visa
// console.log(validateCreditCardNumber("5105105105105100")); // Mastercard
// console.log(validateCreditCardNumber("4011788888881881")); // Elo
// console.log(validateCreditCardNumber("371449635398431"));  // American Express
// console.log(validateCreditCardNumber("6011111111111117")); // Discover
// console.log(validateCreditCardNumber("6062825624254001")); // Hipercard
// console.log(validateCreditCardNumber("30569309025904"));   // Diners Club
// console.log(validateCreditCardNumber("201400000000009"));  // Enroute
// console.log(validateCreditCardNumber("3530111333300000")); // JCB
// console.log(validateCreditCardNumber("869941234567890"));  // Voyager
// console.log(validateCreditCardNumber("507860187000012798")); // Aura
// console.log(validateCreditCardNumber("6759649826438453")); // Maestro
// console.log(validateCreditCardNumber("1234567812345670")); // false

console.log(validateCreditCardNumber("4539578763621486"));