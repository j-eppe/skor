/*
document.addEventListener("click", e => {
    let handle
    if (e.target.matches(".handle")) {
        handle = e.target
    } else {
        handle = e.target.closest(".handle")
    }
    if (handle != null) onHandleClick(handle)
})


function onHandleClick(handle) {
    console.log(handle)
    const slider = handle.closest(".container").querySelector(".slider")
    const sliderIndex = parseInt(slider.style.getPropertyValue("--slider"))
    console.log(slider,sliderIndex, window.getComputedStyle(slider).getPropertyValue("--slider"))

    if (handle.classList.contains("left-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex - 1)
    }


    if (handle.classList.contains("right-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
    }
    console.log("klickade")
} /*