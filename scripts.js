const testNum = (num) => {
  if (num > 10) {return Promise.resolve(`${num} is greater than 10, success!`)}
  else {return Promise.reject(`${num} is less than 10, error!`)}
}

testNum(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

testNum(5)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))


const makeAllCaps = (array) => {
  if (array.every(value => typeof value === "string")) {
    return Promise.resolve(array.map(string => string.toUpperCase()))
  } else {
    return Promise.reject(`No, the array you passed in contained an element that was not a string!`)
  }
}

const sortWords = (array) => Promise.resolve(array.sort())

makeAllCaps(['wowow', 'pants', 'bird'])
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

// ['BIRD', 'PANTS', 'WOWOW']

makeAllCaps(['wowow', 5, 'bird'])
  .then(sortWords)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

// 'No, the array you passed in contained an element that was not a string!'
