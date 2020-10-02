module.exports = function toReadable(number) {
    const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const hundred = ' hundred ';

    let result = "";

    if (number === 0) return numbers[0];
    if (number >= 100) {
        result += numbers[Math.trunc(number / 100)] + hundred;
    }
    if (number % 100 < 20 && number % 100 > 0) {
        result += numbers[Math.trunc(number % 100)];
    } else if (number % 100 >= 20) {
        result += tens[Math.trunc((number % 100) / 10) - 2]
        if (number % 10) {
            result += " " + numbers[Math.trunc(number % 10)]
        }
    }

    return result.trim();
}
