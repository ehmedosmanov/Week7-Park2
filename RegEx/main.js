function validateEmail(email) {
    const regex = /[a-zA-Z][a-zA-Z._\-0-9]+[@]{1}+[a-zA-Z]+\.[a-zA-Z]+(\.[a-zA-Z]{2,5}$)?/gm
    const vehicle = /^(?!00)[0-9]{2}\s[A-Z]{2}\s(?!000)[0-9]{3}$/
    return regex.test(email);
}
