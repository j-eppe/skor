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
    const slider = handle.closest(".container").querySelector(".slider")
    const sliderIndex = parseInt(slider.style.getPropertyValue("--slider"))
    if (handle.classlist.contains("left-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex - 1)
    }


    if (handle.classlist.contains("right-handle")) {
        slider.style.setProperty("--slider-index", sliderIndex + 1)
    }
    console.log("klickade")
}