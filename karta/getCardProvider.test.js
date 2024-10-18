const { getCardProvider } = require("./getCardProvider")

test("should recognize Mastercard", () => {
  //given
  const cardNumber = 5555555555554444
  //when
  const result = getCardProvider(cardNumber)
  //then
  expect(result).toBe("MasterCard")
})

test("should recognize Visa", () => {
  //given
  const cardNumber = 4012888888881881
  //when
  const result = getCardProvider(cardNumber)
  //then
  expect(result).toBe("Visa")
})

test("should recognize AmericanExpress", () => {
  //given
  const cardNumber = 378282246310005
  //when
  const result = getCardProvider(cardNumber)
  //then
  expect(result).toBe("AmericanExpress")
})

test("should mark card number as incorrect", () => {
  //given
  const cardNumber = 123
  //when
  const result = getCardProvider(cardNumber)
  //then
  expect(result).toBe("Incorrect number")
})

test("should throw is card provider cannot be recognize", () => {
  //given
  const cardNumber = 6011000990139424
  //then
  expect(() => {
    getCardProvider(cardNumber)
  }).toThrow("Cannot recognize card provider")
})
