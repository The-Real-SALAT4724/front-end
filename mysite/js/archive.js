
// const tinting = document.querySelector(".tinting")
// console.log(tinting)

// const contactsButton = document.querySelector(".contacts__button")
// contactsButton.addEventListener('click', () => {
//     // console.log(contactsButton)
//     tinting.classList.add('active')
//     setTimeout(() => {
//         tinting.classList.remove('active')
//     }, 900);
// })





// tinting.classList.add('active')


// const welcome = document.querySelector(".welcome")
// const menu = document.querySelectorAll(".menu")


// const homeLink = document.querySelector(".home__link")
// homeLink.classList.add('link-active')








// setTimeout(() => {

// },2000)


// const skillsLink = document.querySelector(".skills__link")
// let toggle1 = false
// skillsLink.addEventListener('click', function () {
//     if (toggle1 === false) {
//         skillsLink.classList.add('link-active')
//         toggle1 = true
//     } else {
//          skillsLink.classList.remove('link-active')
//          toggle1 = false
//     }
// })


// document.addEventListener('mousemove', function () {
//     // console.log('mouse move');
// })

// const title = document.querySelector(".title")

// title.addEventListener('mouseenter', function () {
//     console.log('курсор наведен на заголовок');
//     title.innerHTML += `. I'm cool`
// })

// title.addEventListener('mouseleave', function () {
//     console.log('курсор убран с заголовка');
//     title.innerHTML = 'I´m Mark'
// })



// function funcDialogWindowPrompt(text) {
//    return prompt(text)
// }

// const button = document.querySelector(".button")
// const userDataName = document.querySelector(".user-data__name")
// const userDataNumber = document.querySelector(".user-data__number")



// button.addEventListener('click', function () {
//     alert('Hello!')
    
//     //let res = prompt('How are you? (good or bad)')
//     let answerName = funcDialogWindowPrompt('What is your name?')
//     userDataName.innerHTML += answerName
   


//     let res = funcDialogWindowPrompt('How are you? (answer, good or bad)')

//     console.log(res);
//     if (res.toLowerCase() === 'good') {
//         alert('I am very happy for you!')
//     } else {
//         alert('What I can do to make you happy?')
//         let answer = funcDialogWindowPrompt('do you want to meet me?(Answer, yes or no)')
//         if (answer === 'yes') {
//             alert('My telephone Number is: 02992 979422')
//         } else {
//             let answerNumber = funcDialogWindowPrompt('Please give me your telephone number.')
//             userDataNumber.innerHTML += answerNumber
//         }
//     }
// })

















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


// function delayedLoop(iter, delay) {
//     let i = 0

//     function loop() {
//         if (i < iter) {
//             console.log('Итерация', i + 1);
//             i++
        
//             setTimeout(loop, delay)
//         }

//     }
//     loop()
// }


// function delayedColor(iter, delay) {
//     let i = 0

//     function loop() {
//         if (i < iter) {
//             console.log('Смена цвета', i + 1);
//             i++
//             setTimeout(loop, delay)
//         }

//     }
//     loop()
// }

// setTimeout(()=> {
//     delayedLoop(5, 100)
//     delayedColor(5, 500)
// }, 3000)


