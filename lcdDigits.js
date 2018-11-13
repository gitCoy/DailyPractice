function setNumShow(digitArr) {
  let digitRow = []
  digitArr.forEach(item => {
    // if(item % 3)
  })
  let digitStr = ''
  digitRow.forEach((item, index) => {
    switch (item) {
      case 1: digitStr += '.';break;
      case 2: digitStr += '_';break;
      case 3: digitStr += '|';break;
      default: digitStr += '.'
    }
    if((index + 1) % 3 === 0) {
      digitStr += '  '
    }
  })
  console.log(digitStr)
}

function lcdDigits(number) {
  let numShowObj = {
    '0': [1, 2, 1, 3, 1, 3, 3, 2, 3],
    '1': [1, 1, 1, 1, 1, 3, 1, 1, 3],
    '2': [1, 2, 1, 1, 2, 3, 3, 2, 1],
    '3': [1, 2, 1, 1, 2, 3, 1, 2, 3],
    '4': [1, 1, 1, 3, 2, 3, 1, 1, 3],
    '5': [1, 2, 1, 3, 2, 1, 1, 2, 3],
    '6': [1, 2, 1, 3, 2, 1, 3, 2, 3],
    '7': [1, 2, 1, 1, 1, 3, 1, 1, 3],
    '8': [1, 2, 1, 3, 2, 3, 3, 2, 3],
    '9': [1, 2, 1, 3, 2, 3, 1, 1, 3]
  }
  let numArr = number.toString().split('')
  let digitArr = numArr.map(item => {
    return numShowObj[item]
  })
  setNumShow(digitArr)
  return ''
}

console.log(lcdDigits(1234567890))