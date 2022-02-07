let currentDate = new Date()

console.log(currentDate);

function speech() {
if ('speechSynthesis' in window) {
	var msg = new SpeechSynthesisUtterance();
	msg.text = "Good Morning";
	window.speechSynthesis.speak(msg);
} else {
	 alert("Sorry, your browser doesn't support text to speech!");
	}
}
