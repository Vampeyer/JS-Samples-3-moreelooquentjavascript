let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
     
      this.thing = " Blue"
    }
  };
  let blackRabbit = Object.create(protoRabbit);
  blackRabbit.type = "black";
  blackRabbit.another = " I already told you  "
  blackRabbit.another2 = "gg"

  blackRabbit.speak("wazzap! ")
  console.log("I am fear and darkness" , blackRabbit.another , blackRabbit.another2 , blackRabbit.thing );




  // → The black rabbit says 'I am fear and darkness'