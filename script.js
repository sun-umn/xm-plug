function setComparisonPosition(slider, value) {
  const bounded = Math.max(0, Math.min(100, Number(value)));
  const reconstruction = slider.querySelector(".compare-image.reconstruction");
  const divider = slider.querySelector(".compare-divider");

  reconstruction.style.clipPath = `inset(0 0 0 ${bounded}%)`;
  divider.style.left = `${bounded}%`;
  slider.dataset.position = String(bounded);
}

function setComparisonImage(layer, src) {
  if (!layer || !src) return;

  layer.style.backgroundImage = `url("${src}")`;
  layer.classList.remove("placeholder-image");
}

document.querySelectorAll(".compare-slider").forEach((slider) => {
  const input = slider.querySelector('input[type="range"]');
  const measurement = slider.querySelector(".compare-image.measurement");
  const reconstruction = slider.querySelector(".compare-image.reconstruction");

  setComparisonImage(measurement, slider.dataset.measurementSrc);
  setComparisonImage(reconstruction, slider.dataset.reconstructionSrc);
  setComparisonPosition(slider, input.value);

  input.addEventListener("input", (event) => {
    setComparisonPosition(slider, event.target.value);
  });
});
