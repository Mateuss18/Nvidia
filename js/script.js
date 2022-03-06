let time = 4000,
    currentSlideIndex = 0,
    slide = document.querySelectorAll('.slides .slide')
    ball = document.querySelectorAll('.balls .ball')
    max = slide.length

function nextSlide(){
    slide[currentSlideIndex]
        .classList.remove("selected")
    ball[currentSlideIndex]
        .classList.remove("selecionado")
    currentSlideIndex++

    if(currentSlideIndex >= max){
        currentSlideIndex = 0
    }

    slide[currentSlideIndex]
        .classList.add("selected")
    ball[currentSlideIndex]
        .classList.add("selecionado")
}

function start(){
    setInterval(() => {
        nextSlide()
    }, time)
}

window.addEventListener("load", start)
