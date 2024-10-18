// klasa okresla max pozmiom wody
// metoda dostaje aktualny poziom
// jesli aktualny jest powyzej alarmowego zwroc ewakuacja : zostañ w domnu
// jesli stan aktualny jest x2 powyzej alarmowego wrzuc wyjatek - przyrazdy popsute

/// jesli trzy koljne odczyty powyze max zwracamy wproadzenie klaski zywiolowej

const WaterMeter = require("./waterMeter")
test("should stay home if currentWaterLevel lower than max", () => {
  //given
  const currentWaterLevel = 5
  const maxWaterLevel = 7
  //when
  const waterMeter = new WaterMeter(maxWaterLevel)
  const result = waterMeter.check(currentWaterLevel)
  //than
  expect(result).toBe("Stay home")
})

test("sholud evacuation if currentLevel greater than max ", () => {
  //given
  const currentWaterLevel = 8
  const maxWaterLevel = 7
  //when
  const waterMeter = new WaterMeter(maxWaterLevel)
  const result = waterMeter.check(currentWaterLevel)
  //than
  expect(result).toBe("Evacuation")
})

test("should panic when the third measurement in a row is above max level", () => {
  //given
  const currentWaterLevel = 8
  const maxWaterLevel = 7
  const waterMeter = new WaterMeter(maxWaterLevel)
  waterMeter.check(currentWaterLevel)
  waterMeter.check(currentWaterLevel)
  //when
  const result = waterMeter.check(currentWaterLevel)
  //than
  expect(result).toBe("Panic")
})

test("should throw exception when curent level is twice as high", () => {
  //given
  const currentWaterLevel = 14
  const maxWaterLevel = 7
  //when
  const waterMeter = new WaterMeter(maxWaterLevel)
  //const result = waterMeter.check(currentWaterLevel)
  //than
  expect(() => waterMeter.check(currentWaterLevel)).toThrow(
    "Error of the measuring instrument"
  )
})
