console.log('Debounce');


const debounceInput = document.querySelector('#debounce')


let debounceUpdateText = debounce((letter) => console.log(letter),  1000)

debounceInput.addEventListener('keyup', (e) => debounceUpdateText(e.target.value))

function debounce(callBack, delay) {
	let timeout

	return (...args) => {
		clearTimeout(timeout)

		timeout = setTimeout(() => { 
			callBack(args)
		})

	}


}