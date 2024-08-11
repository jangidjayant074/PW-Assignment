function convertToNumbers(string) {
    try {
        const number = Number(string);
        if (Number.isNaN(number)) {
            throw new Error("Invalid Number");
        }
        return number;
    } catch (error) {
        return error.message;
    }
}

 console.log(convertToNumbers("12345"));
 console.log(convertToNumbers("abcdef"));
