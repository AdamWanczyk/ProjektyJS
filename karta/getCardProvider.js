module.exports.getCardProvider = cardNumber => {
  if (isCardNumberValid(cardNumber)) {
    return getProvider(cardNumber)
  } else {
    return "Incorrect number"
  }
}
function isCardNumberValid(cardNumber) {
  const normalizedCardNumber = normalize(cardNumber)

  const firstSet = normalizedCardNumber.filter((_, index) => index % 2 === 0)

  const secondSet = normalizedCardNumber.filter((_, index) => index % 2 === 1)

  const firstSum = firstSet
    .map(n => (n * 2).toString())
    .reduce((curr, next) => {
      return curr + Number(next[0]) + (next[1] ? Number(next[1]) : 0)
    }, 0)
  const secondSum = secondSet.reduce((curr, next) => curr + next, 0)

  return (firstSum + secondSum) % 10 === 0
}

function normalize(cardNumber) {
  return cardNumber.toString().length % 2 === 0
    ? [...cardNumber.toString()].map(n => Number(n))
    : [0, ...cardNumber.toString()].map(n => Number(n))
}

function getProvider(cardNumber) {
  const cardNumberString = cardNumber.toString()
  if (isVisa(cardNumberString)) {
    return "Visa"
  } else if (isMasterCard(cardNumberString)) {
    return "MasterCard"
  } else if (isAmEx(cardNumberString)) {
    return "AmericanExpress"
  } else {
    throw new Error("Cannot recognize card provider")
  }
}

function isVisa(cardNumberString) {
  const isLength =
    cardNumberString.length === 13 || cardNumberString.length === 16
  const isPrefix = cardNumberString.startsWith("4")
  return isLength && isPrefix
}

function isMasterCard(cardNumberString) {
  const isLength = cardNumberString.length === 16
  const isPrefix = ["51", "52", "53", "54", "55"].includes(
    cardNumberString.substring(0, 2)
  )
  return isLength && isPrefix
}

function isAmEx(cardNumberString) {
  const isLength = cardNumberString.length === 15
  const isPrefix = ["34", "37"].includes(cardNumberString.substring(0, 2))
  return isLength && isPrefix
}
