document.addEventListener('DOMContentLoaded', function () {
  const colorPicker = document.getElementById('colorPicker');
  const redSlider = document.getElementById('red');
  const greenSlider = document.getElementById('green');
  const blueSlider = document.getElementById('blue');
  const redInput = document.getElementById('redInput');
  const greenInput = document.getElementById('greenInput');
  const blueInput = document.getElementById('blueInput');
  const colorBox = document.getElementById('color-box');
  const hexCode = document.getElementById('hex-code');

  function updateColor() {
    const redValue = parseInt(redSlider.value || redInput.value);
    const greenValue = parseInt(greenSlider.value || greenInput.value);
    const blueValue = parseInt(blueSlider.value || blueInput.value);

    if (isNaN(redValue) || isNaN(greenValue) || isNaN(blueValue)) {
      return; // Si alguno de los valores no es un número válido, no se actualiza el color
    }

    redSlider.value = redValue;
    greenSlider.value = greenValue;
    blueSlider.value = blueValue;

    redInput.value = redValue;
    greenInput.value = greenValue;
    blueInput.value = blueValue;

    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
    colorBox.style.backgroundColor = rgbColor;

    const hexValue = rgbToHex(redValue, greenValue, blueValue);
    hexCode.textContent = `#${hexValue}`;
  }

  function rgbToHex(r, g, b) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  colorPicker.addEventListener('input', updateColor);
  redSlider.addEventListener('input', updateColor);
  greenSlider.addEventListener('input', updateColor);
  blueSlider.addEventListener('input', updateColor);
  redInput.addEventListener('input', updateColor);
  greenInput.addEventListener('input', updateColor);
  blueInput.addEventListener('input', updateColor);

  updateColor(); // Update color initially
});
