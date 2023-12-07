// console.log('Tasks')




// TASK #1 Die Zeile oder das Wort in die
// entgegengesetzte Richtung umkehren.

//level
// let word = "mark"
// console.log(word);

// type data Array
// let letterArray = word.split('')
// console.log(letterArray)

// let reverse = letterArray.reverse()
// console.log(reverse)

// // type data String
// let reversWord = reverse.join('')
// console.log(reversWord)

// let result = word == reversWord
// console.log(result)





// let palindrome = word.split('').reverse().join('') === word
// console.log(palindrome)



// TASK #2

//1
// let num = 1
// while (num <= 10) {
// 	console.log(num);
// 	num += 1
// }

//2
// for (let i = 1; i <= 10; i++){
// 	console.log(i);
// }

//3
// let count = 1
// function recursive() {
// 	if (count <= 10) {
// 		console.log(count);
// 		count = count + 1
// 		mark()
// 	} else {
// 		return
// 	}
// }

// console.log(recursive());

// let word = "mark"
// console.log(word)

// word = word.split('')
// console.log(word)

// word = word.reverse()
// console.log(word)

// word = word.join('')

// console.log(word)

// if (word == 'mark'){
//     console.log('Palindrome: ' + true)
// } else {
//     console.log('Palindrome: ' + false)
// }


// console.log( let word.reverse() )

// let palindrome = word.split('')
// console.log(palindrome)

// let 0


// цикл №1
// let count = 0
// while (count < 457) {
// 	count++
// 	console.log('Hello Mark: ' + count);
//   // if (count == 457){
//   //   break
// 	// }
// }


// цикл №2
// for (let i = 0; i <= 10; i = i + 1){
//   console.log(i);
// }


const array = ['Hello', 21, false]



const imgServer = document.querySelector('.img-server-wrap')



document.addEventListener("DOMContentLoaded", function () {

	const image = document.querySelector(".img");
	const url = "https://jsonplaceholder.typicode.com/photos/1";

	async function fetchHandler() {
		try {
			const response = await fetch(url);
			const data = await response.json();
			console.log(data.url);
			image.src = data.url;
			image.alt = data.title;
		} catch (error) {
			console.log(error);
		}
	}


	fetchHandler()
});

//const requestURL = 'https://jsonplaceholder.typicode.com/todos'
// const requestURL = 'https://jsonplaceholder.typicode.com/photos/1'

// fetch(requestURL)
//       .then(response => response.json())
// 	.then(json => console.log(json))


      // fetch('https://via.placeholder.com/1000/92c952')