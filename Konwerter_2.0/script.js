const converter = document.querySelector("#converter")
const result = document.querySelector(".result")
const convBtn = document.querySelector(".conv")
const resetBtn = document.querySelector(".reset")
const one = document.querySelector("#input1")
const two = document.querySelector("#input2")

let fahrenheit
let celsius
let kelvinCelsius
let celsiusKelvin
let fahrKel
let kelFahr

const fahrToCel = () => {
  fahrenheit = converter.value * 1.8 + 32
  result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F`
  converter.value = ""
}

const CelToFahr = () => {
  celsius = (converter.value - 32) / 1.8
  result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`
  converter.value = ""
}

const celToKel = () => {
  celsiusKelvin = converter.value + 273
  result.textContent = `${converter.value}°C to ${celsiusKelvin.toFixed(1)}°K`
  converter.value = ""
}

const kelToCel = () => {
  kelvinCelsius = converter.value - 273
  result.textContent = `${converter.value}°K to ${kelvinCelsius.toFixed(1)}°C`
  converter.value = ""
}
const kelToFahr = () => {
  fahrKel = (converter.value - 273) * 1.8 + 32
  result.textContent = `${converter.value}°K to ${fahrKel.toFixed(1)}°F`
  converter.value = ""
}
const fahrToKel = () => {
  kelFahr = (converter.value - 32) / 1.8 + 273
  result.textContent = `${converter.value}°F to ${kelFahr.toFixed(1)}°K`
  converter.value = ""
}
const conversion = () => {
  if (converter.value !== "") {
    if (one.value === "°C" && two.value === "°F") {
      fahrToCel()
    } else if (one.value === "°F" && two.value === "°C") {
      CelToFahr()
    } else if (one.value === "°C" && two.value === "°K") {
      celToKel()
    } else if (one.value === "°K" && two.value === "°C") {
      kelToCel()
    } else if (one.value === "°K" && two.value === "°F") {
      kelToFahr()
    } else if (one.value === "°F" && two.value === "°K") {
      fahrToKel()
    }
  } else {
    result.textContent = "Muisz podać jakąś wartość lub wybrać jednostkę!"
  }
}

const reset = () => {
  converter.value = ""
  result.textContent = ""
  input1.value = ""
  input2.value = ""
}

convBtn.addEventListener("click", conversion)
resetBtn.addEventListener("click", reset)
