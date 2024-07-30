// Getters, setters, and statics
// Interfaces often contain plain properties, not just methods. 
// For example, Map objects have a size property that
//  tells you how many keys are stored in them.

// It is not necessary for such an object to compute 
// and store such a property directly in the instance.
//  Even properties that are accessed directly may hide 
//  a method call.

//Such methods are called getters and
//   are defined by writing get in front of the method
//    name in an object expression or class declaration.

let varyingSize = {
    get size() {
      return Math.floor(Math.random() * 100);
    }
  };
  
  console.log(varyingSize.size);
  // → 73
  console.log(varyingSize.size);
  // → 49









