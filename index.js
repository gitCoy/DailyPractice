function detachArr(arr) {
  let copyList = arr,
      maxLength = arr[arr.length - 1],
      calcList = []
  for(let i = 0; i < maxLength; i++) {
    let itemList = []
    copyList = copyList.map(item => {
      if(item !== 0) {
        itemList.push(1)
        return item - 1
      } else {
        return 0
      }
    })
    calcList.push(itemList)
  }
  return calcList
}

function sortLength(arr) {
  return arr.sort((a, b) => {
    return a.length > b.length
  })
}

function clacPrice(arr) {
  let price = 8,
      discountObj = {
        1: 1,
        2: 0.95,
        3: 0.9,
        4: 0.8,
        5: 0.75
      }
  let priceList = arr.map(item => {
    return item.reduce((prev, cur) => {
      let prevNum = prev.length ? prev.length * (price * discountObj[prev.length]) : prev
      return prevNum + (cur.length * (price * discountObj[cur.length]))
    })
  })
  console.log(priceList)
  console.log('---------------------------------------')
  let minPrice = {
    price: 0,
    list: []
  }
  priceList.forEach((item, index) => {
    if(item < minPrice.price || minPrice.price === 0) {
      minPrice.price = item
      minPrice.list = arr[index]
    }
  })
  return minPrice
}

function calcHarryPotter(arr) {
  let totalList = []
  arr.sort((a, b) => {
    return a > b
  })
  let calcList = detachArr(arr) //以最多种类的情况分离
  sortLength(calcList) //按照长度从多高到低排序
  totalList.push(JSON.parse(JSON.stringify(calcList)))
  console.log(calcList)
  while (calcList[calcList.length - 1].length - calcList[0].length > 1) { //当购买种类最多和最少的差大于1就继续调整购买组合
    for(let i = calcList.length - 1; i > 0; i--) {
      if(calcList[calcList.length - 1].length - calcList[i-1].length > 1) {
        calcList[i-1].push(1)
        calcList[calcList.length - 1].pop()
        break;
      }
    }
    sortLength(calcList)
    console.log(calcList)
    totalList.push(JSON.parse(JSON.stringify(calcList)))
  }
  console.log('---------------------------------------')
  return clacPrice(totalList)
}

console.log(calcHarryPotter([0,2,0,2,2]))