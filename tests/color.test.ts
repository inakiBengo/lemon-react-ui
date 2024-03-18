import setColor from '../src/color'
import {ColorIsLight, adjustBrightness, hexToRgb} from '../src/color'

const inputColor = '#C25252'
const outputColor = {
  darkestColor: "rgb(155, 66, 66)",
  isLightColor: false,
  lightColor: "rgb(233, 98, 98)",
  originalColor: "rgb(194, 82, 82)",
}

describe("setColor", () => {
  test("a color is passed and it must return the original color in RGB, a version of the light color, another dark color and a boolean that indicates whether it is a light or dark color", 
  () => {
    const color = setColor(inputColor)

    expect(color).toMatchObject(outputColor)
  })
  
  test("If a light color enters, it returns true and if it is dark, it returns false", ( ) => {
    expect(ColorIsLight('0', '0', '0')).toBeFalsy()
    expect(ColorIsLight('225', '225', '225')).toBeTruthy()
  })

  test("A RGB number and another number are passed to it. If the second argument is greater than one, it returns a higher number to the first argument. If it is less than one, it returns a lower number than the first number.", 
  () => {
    expect(adjustBrightness('194', 1.2)).toBe(233)
    expect(adjustBrightness('194', 0.8)).toBe(155)
  })

  test("hexToRgb is given a hexadecimal color and returns the same color but in RGB", () => {
    expect(hexToRgb('#C25252')).toBe('rgb(194, 82, 82)')
  })
}) 
