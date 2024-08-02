class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
      return 'static method has been called.';
    }
    static {
      console.log('Class static initialization block called');
    }
  }
  
  console.log(ClassWithStaticMethod.staticProperty);
  // Expected output: "someValue"
  console.log(ClassWithStaticMethod.staticMethod());
  // Expected output: "static method has been called."

  


  class ClassWithStaticField {
    static staticField;
    static staticFieldWithInitializer = "static field";
  }
  
  class SubclassWithStaticField extends ClassWithStaticField {
    static subStaticField = "subclass field";
  }
  
  console.log(Object.hasOwn(ClassWithStaticField, "staticField")); // true
  console.log(ClassWithStaticField.staticField); // undefined
  console.log(ClassWithStaticField.staticFieldWithInitializer); // "static field"
  console.log(SubclassWithStaticField.staticFieldWithInitializer); // "static field"
  console.log(SubclassWithStaticField.subStaticField); // "subclass field"




