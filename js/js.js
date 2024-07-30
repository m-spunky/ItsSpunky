

let count=0
function menu() {
    const nav = document.querySelector('.navbar')
    const back = document.querySelector('.back')
    count++
    if (count===1) {
        nav.classList.remove('d-sm-none')
        nav.classList.add('open')
        nav.classList.remove('close')
        back.classList.remove("d-sm-none")
    }
    else{
        count=0
        nav.classList.add('close')
        nav.classList.remove('open')
        back.classList.add("d-sm-none")

    }
}

let colorCount=0
function color() {
    const change = document.querySelector('.color-change')
    const bgChange = document.querySelector('.bg-white')
    colorCount++
    if (colorCount===1) {
        change.classList.remove('d-sm-none')
        change.classList.remove("colorclose")
        change.classList.add("coloropen")
        bgChange.classList.remove("d-sm-none")
    }
    else{
        colorCount=0
        change.classList.add("colorclose")
        change.classList.remove("coloropen")
        bgChange.classList.add("d-sm-none")
    }
}


// .....................................color change......................................

const colorChange = document.querySelector(':root')

function green() {
    colorChange.style.setProperty('--green','#28E98C')
    color()
}
function yellow() {
    colorChange.style.setProperty('--green','#E4AF12')
    color()
}
function orange() {
    colorChange.style.setProperty('--green','#FE6F1D')
    color()
}
function sky() {
    colorChange.style.setProperty('--green','#14C5FD')
    color()
}
function gray() {
    colorChange.style.setProperty('--green','#C0C0C0')
    color()
}
function blue() {
    colorChange.style.setProperty('--green','#1338F3')
    color()
}
function red() {
    colorChange.style.setProperty('--green','#F31313')
    color()
}
function rose() {
    colorChange.style.setProperty('--green','#FF99CC')
    color()
}