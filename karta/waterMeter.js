class WaterMeter {
  constructor(maxWaterLevel) {
    this.maxWaterLevel = maxWaterLevel
    this.highWaterCount = 0
  }

  check(currentWaterLevel) {
    this.maxWaterLevel < currentWaterLevel
      ? this.highWaterCount++
      : (this.highWaterCount = 0)

    if (this.highWaterCount >= 3) return "Panic"

    if (currentWaterLevel === this.maxWaterLevel * 2) {
      throw new Error("Error of the measuring instrument")
    } else if (currentWaterLevel > this.maxWaterLevel) {
      return "Evacuation"
    } else {
      return "Stay home"
    }
  }
}

module.exports = WaterMeter
