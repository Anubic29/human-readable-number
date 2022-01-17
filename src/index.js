module.exports = function toReadable (number) {
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const tens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  number = number.toString().split('').reverse()
  number = number.map((num, index) => {
    if (index % 3 === 2) {
      return numbers[+num] + ' hundred';
    }
    if (index % 3 === 1) {
      if (num > 1) {
        return dozens[+num-2];
      } else if (num == 1) {
        return tens[0 + +number[index - 1]];
      } else {
        return '';
      }
    }
    return numbers[+num];
  }).reverse()
  return number.map((num, index) => {
    if (tens.includes(num)) {
      number[index + 1] = '';
    }
    if (num === 'zero' && index !== 0) {
      return '';
    }
    return num;
  }).join(' ').replace('  ', ' ').trim()
}
