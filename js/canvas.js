// get elements

let canvas = document.querySelector("canvas"),
    brush = document.getElementById("brush"),
    range = document.getElementById("inprange"),
    toolbtns = document.querySelectorAll(".option"),
    colorBtns = document.querySelectorAll(".options .option"),
    ctx = canvas.getContext("2d"),
    colorPicker = document.querySelector("#inpcolor"),
    fillColor = document.querySelector("#facheckbox"),
    saveImg = document.querySelector("#saveimage"),
    clearcanvas = document.querySelector("#clearcanvas")

// Global variables
let Swriting = false,
    preMouseX, preMouseY,
    selectedTool = "brush",
    selectedColor = "#000",
    snapshot,pointer;

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight


})
// tool buttons
toolbtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector('.tools .active').classList.remove("active")
        btn.classList.add("active")
        console.log(btn)
        selectedTool = btn.id;
        console.log(selectedTool)
        pointer=window.getComputedStyle(btn).getPropertyValue("cursor")
        console.log(pointer)

    })
})
colorBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        selectedColor = window.getComputedStyle(btn).getPropertyValue("background-color")
        console.log(selectedColor)

    })
})
// for rectange
const drawRect = (e) => {

    if (!fillColor.checked) {

        return ctx.strokeRect(e.offsetX, e.offsetY, preMouseX - e.offsetX, preMouseY - e.offsetY)
    }
    else {
        ctx.fillRect(e.offsetX, e.offsetY, preMouseX - e.offsetX, preMouseY - e.offsetY)

    }
}

// for circle
const drawCircle = (e) => {
    ctx.beginPath()
    let radius = Math.sqrt(Math.pow((preMouseX - e.offsetX), 2) + Math.pow((preMouseY - e.offsetY), 2))
    ctx.arc(preMouseX, preMouseY, radius, 0, 2 * Math.PI)//arc is used for creating cirle
    ctx.stroke()

    fillColor.checked ? ctx.fill() : ctx.stroke()
}
// draw triangle
const drawTriangle = (e) => {
    ctx.beginPath()
    ctx.moveTo(preMouseX, preMouseY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.lineTo(preMouseX * 2 - e.offsetX, e.offsetY)
    ctx.closePath()
    fillColor.checked ? ctx.fill() : ctx.stroke();
}
const startwriting = (e) => {
    Swriting = true

    preMouseX = e.offsetX
    preMouseY = e.offsetY
    // console.log(preMouseX)
    // console.log(preMouseY)
    ctx.beginPath()
    ctx.lineWidth = range.value
    ctx.strokeStyle = selectedColor
    ctx.fillStyle = selectedColor
    snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height)
}
colorPicker.addEventListener("change", () => {
    colorPicker.parentElement.style.background = colorPicker.value
    colorPicker.parentElement.click()
})
// for writing
const writing = (e) => {
    if (!Swriting) return
    ctx.putImageData(snapshot, 0, 0)

    if (selectedTool === "brush" || selectedTool === "eraser") {
        ctx.strokeStyle = selectedTool === "eraser" ? "#ffff"  : selectedColor;

        ctx.lineTo(e.offsetX, e.offsetY)
        ctx.stroke()
    } else if (selectedTool === "rectangle") {
        drawRect(e)
    } else if (selectedTool === "circle") {
        drawCircle(e)
    } else if (selectedTool === "triangle") {
        drawTriangle(e)
    }


}

const stopwriting = () => {
    Swriting = false
}
window.addEventListener("mousemove", writing)

window.addEventListener("mousedown", startwriting)
window.addEventListener("mouseup", stopwriting)


// clear and save image
clearcanvas.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
})
saveImg.addEventListener("click", () => {
    const link = document.createElement("a")
    link.download = `${Date.now()}.jpg`
    link.href = canvas.toDataURL()
    link.click()

})