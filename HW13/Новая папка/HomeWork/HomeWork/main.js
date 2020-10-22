const listeningObject = document.querySelector('.wrapper');
const wrapperText = document.querySelector('.text_inform');




function randomSentense () {
const randomBodyParts = ['Face', 'Nose', 'Hair'];
const randomAdjectives = ['Smelly', 'Boring', 'Stupid'];
const randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat']

let randomBodyPart = randomBodyParts[Math.floor(Math.random()*(randomBodyParts.length))];
let randomAdjective = randomAdjectives[Math.floor(Math.random()*(randomAdjectives.length))];
let randomWord = randomWords[Math.floor(Math.random()*(randomWords.length))];

let randomInsult = 'Your ' + randomBodyPart + ' is like a ' + randomAdjective + ' ' + randomWord + '!!!' + ' AHAHAHA!!!'

return randomInsult

}





const ACTIVE = 'active_content'



listeningObject.addEventListener('click', (elem) => {


if (elem.target.classList.contains('button')) {
	const contentWrapper = elem.target.parentNode.querySelector('.content_wrapper');
   	contentWrapper.classList.toggle(ACTIVE);
    	contentWrapper.textContent = randomSentense ()

}



})
