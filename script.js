function setComparePosition(compare, value) {
  const bounded = Math.max(0, Math.min(100, Number(value)));
  const after = compare.querySelector(".compare-layer.after");
  const handle = compare.querySelector(".compare-handle");

  after.style.clipPath = `inset(0 0 0 ${bounded}%)`;
  handle.style.left = `${bounded}%`;
  compare.dataset.position = String(bounded);
}

function setStaticImage(layer, src) {
  if (!layer || !src) return;

  layer.style.backgroundImage = `url("${src}")`;
  layer.classList.add("has-image");
  layer.classList.remove(
    "placeholder",
    "placeholder-raw",
    "placeholder-clean",
    "placeholder-video",
    "placeholder-video-clean",
    "placeholder-science",
    "placeholder-science-clean"
  );
}

document.querySelectorAll("[data-compare]").forEach((card) => {
  const compare = card.querySelector(".compare");
  const slider = card.querySelector('input[type="range"]');
  const beforeLayer = card.querySelector(".compare-layer.before");
  const afterLayer = card.querySelector(".compare-layer.after");

  setStaticImage(beforeLayer, compare.dataset.beforeSrc);
  setStaticImage(afterLayer, compare.dataset.afterSrc);

  setComparePosition(compare, slider.value);

  slider.addEventListener("input", (event) => {
    setComparePosition(compare, event.target.value);
  });
});
