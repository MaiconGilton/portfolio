document.addEventListener("DOMContentLoaded", () => {
  // ----------------- Preloader ----------------- //
  const preloader = document.getElementById("preloader")

  // Animate opacity
  if (preloader) {
    requestAnimationFrame(() => {
      preloader.style.transition = "opacity 600ms"
      preloader.style.opacity = "0"
      setTimeout(() => preloader.remove(), 600)
    })
  }

  // Listen for the transition to end
  preloader?.addEventListener(
    "transitionend",
    () => {
      // Wait 300ms before hiding
      setTimeout(() => {
        preloader.style.visibility = "hidden"
        // Fade out
        preloader.style.transition = "opacity 400ms" // fadeOut default duration
        preloader.style.opacity = "0"
        preloader.addEventListener(
          "transitionend",
          () => {
            preloader.style.display = "none"
          },
          { once: true },
        )
      }, 300)
    },
    { once: true },
  )
})
