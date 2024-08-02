// Description
// Defining classes
// Classes are in fact "special functions", 
// and just as you can define function expressions
//  and function declarations, a class 
// can be defined in two ways: a class expression or 
// a class declaration.

// Declaration
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  }
  
  // Expression; the class is anonymous but assigned to a variable
  const Rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };
  
  // Expression; the class has its own name
  const Rectangle = class Rectangle2 {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
  };


  let newRect = new Rectangle2();

  newRect

