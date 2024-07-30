// Private Properties
// It is common for classes to
//  define some properties and 
//  methods for internal use that are not 
// part of their interface. 
// These are called private
//  properties, as opposed to
//   public ones, which 
//   are part of the object’s 
//   external interface.


// To declare a private method,
//  put a # sign in front of its name. 
//  Such methods can only be called from
//   inside the class declaration that defines them.


class SecretiveObject {
    #getSecret() {
      return "I ate all the plums";
    }
    interrogate() {
      let shallISayIt = this.#getSecret();
      return "never";
    }
  }