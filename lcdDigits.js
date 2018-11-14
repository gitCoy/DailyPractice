function setNumShow(digitArr) {
  let digitRow = [[], [], []]
  let digitStr = ''
  digitArr.forEach(item => {
    digitRow[0] = digitRow[0].concat(item.slice(0, 3))
    digitRow[1] = digitRow[1].concat(item.slice(3, 6))
    digitRow[2] = digitRow[2].concat(item.slice(6))
  })
  digitRow.forEach(i => {
    i.forEach((item, index) => {
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
    digitStr += '\n'
  })
  return digitStr
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
  return setNumShow(digitArr)
}

console.log(lcdDigits('18345354354325432543254325432542354'))