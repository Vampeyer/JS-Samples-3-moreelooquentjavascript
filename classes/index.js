
class Rabbit {
    constructor(type) {
      this.type = type;
    }
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  }
let rabbiter = new Rabbit("blue and crazy ")

rabbiter.speak("Wazza zaaap ! s")