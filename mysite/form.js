

export function form() { 
	console.log('form.js')



	const consoleLogStyles1 = 'color: yellow; font-weight: bold'
	const consoleLogText1 = 'This is a console log from script.js'
	console.log(`%c${consoleLogText1}`, consoleLogStyles1)

	const consoleLogStyles2 = 'color: lime; font-weight: bold'
	const consoleLogText2 = 'Website is copyright (©) by Victor Svetailo and Mark Rempel'
	console.log(`%c${consoleLogText2}`, consoleLogStyles2)

	const consoleLogStyles3 = 'color: blue; font-weight: bold'
	const consoleLogText3 = 'Console:\n'
	console.log(`%c${consoleLogText3}`, consoleLogStyles3)


	// let deleteButton = document.querySelector('.delete-button').addEventListener('click', () => {
	// 	inputName.removeEventListener('input', nameData)
	// })


	let sendButton = document.querySelector('.send-button')
	// console.log(sendButton)
	let inputName = document.querySelector('.input-name')
	// console.log(inputName)
	let inputMail = document.querySelector('.input-mail')
	// console.log(inputMail)
	let textTest = document.querySelector('.text-test')
	// console.log(textTest)
	let textArea = document.querySelector('.textarea')
	// console.log(textArea)
	let mailTest = document.querySelector('.mail-test')
	// console.log(mailTest)


	const user = {
		name: '',
		email: ''
	}

	function nameData(event) {
		user.name = event.target.value
		console.log(event.target.value)
		inputName.classList.remove('error')
	}

	inputName.addEventListener('input', nameData)

	function mailData(event) {
		user.email = event.target.value
		inputMail.classList.remove('error')
	}

	inputMail.addEventListener('input', mailData)


	function sendData() {
		if (user.name.trim()) {
			console.log('Name', user.name)
		}
		else {
			inputName.classList.add('error')
		}


		if (user.email.trim()) {
			console.log('Mail', user.email)
		}
		else {
			inputMail.classList.add('error')
		}

		console.log('Send_Button -> click.event =', user)
	}

	sendButton.addEventListener('click', sendData)


	function textAreaData(event) {
		console.log(event.target.value)
		user.textarea = event.target.value
	}

	textArea.addEventListener('input', textAreaData)




}






// *** 




