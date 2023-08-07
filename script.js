const title = document.querySelector(".title")
const welcome = document.querySelector(".welcome")


function delayedLoop(iter, delay) {
    let i = 0

    function loop() {
        if (i < iter) {
            console.log('Итерация', i + 1);
            i++
        
            setTimeout(loop, delay)
        }

    }
    loop()
}


function delayedColor(iter, delay) {
    let i = 0

    function loop() {
        if (i < iter) {
            console.log('Смена цвета', i + 1);
            i++
            setTimeout(loop, delay)
        }

    }
    loop()
}

setTimeout(()=> {
    delayedLoop(5, 100)
    delayedColor(5, 500)
}, 3000)


//let number

// title.addEventListener("click", function () {
//     title.classList.toggle("color")
//     number = 100
//     console.log(number)
//     for (let i = 0; i <= number; i++) {
//         if (i === 100) {
//             setTimeout(() => {
//                 alert('NOOOO')
//                 console.log("NOOOO")
//             }, 1000)

//         }
//         title.innerHTML += " % "
//     }


// })