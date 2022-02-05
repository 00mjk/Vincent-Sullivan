


function speech() {
if ('speechSynthesis' in window) {
	var msg = new SpeechSynthesisUtterance();
	msg.text = "Good Morning";
	window.speechSynthesis.speak(msg);
} else {
	 alert("Sorry, your browser doesn't support text to speech!");
	}
}






const FToC = through2.ctor({objectMode: true}, function (record, encoding, callback) {
  if (record.temp != null && record.unit == "F") {
    record.temp = ( ( record.temp - 32 ) * 5 ) / 9
    record.unit = "C"
  }
  this.push(record)
  callback()
})

// Create instances of FToC like so:
const converter = new FToC()
// Or:
const converter = FToC()
// Or specify/override options when you instantiate, if you prefer:
const converter = FToC({objectMode: true})
